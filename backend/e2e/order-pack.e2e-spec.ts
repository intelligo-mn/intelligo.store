import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/core/guards/auth.guard';
import { RolesGuard } from '../src/core/guards/roles.guard';
import { OrderPackDTO } from '../src/domain/dto/order-pack.dto';
import { OrderPackService } from '../src/service/order-pack.service';

describe('OrderPack Controller', () => {
  let app: INestApplication;

  const authGuardMock = { canActivate: (): any => true };
  const rolesGuardMock = { canActivate: (): any => true };
  const entityMock: any = {
    id: 'entityId'
  };

  const serviceMock = {
    findById: (): any => entityMock,
    findAndCount: (): any => [entityMock, 0],
    save: (): any => entityMock,
    update: (): any => entityMock,
    deleteById: (): any => entityMock
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    })
      .overrideGuard(AuthGuard)
      .useValue(authGuardMock)
      .overrideGuard(RolesGuard)
      .useValue(rolesGuardMock)
      .overrideProvider(OrderPackService)
      .useValue(serviceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET all order-packs ', async () => {
    const getEntities: OrderPackDTO[] = (
      await request(app.getHttpServer())
        .get('/api/order-packs')
        .expect(200)
    ).body;

    expect(getEntities).toEqual(entityMock);
  });

  it('/GET order-packs by id', async () => {
    const getEntity: OrderPackDTO = (
      await request(app.getHttpServer())
        .get('/api/order-packs/' + entityMock.id)
        .expect(200)
    ).body;

    expect(getEntity).toEqual(entityMock);
  });

  it('/POST create order-packs', async () => {
    const createdEntity: OrderPackDTO = (
      await request(app.getHttpServer())
        .post('/api/order-packs')
        .send(entityMock)
        .expect(201)
    ).body;

    expect(createdEntity).toEqual(entityMock);
  });

  it('/PUT update order-packs', async () => {
    const updatedEntity: OrderPackDTO = (
      await request(app.getHttpServer())
        .put('/api/order-packs')
        .send(entityMock)
        .expect(201)
    ).body;

    expect(updatedEntity).toEqual(entityMock);
  });

  it('/DELETE order-packs', async () => {
    const deletedEntity: OrderPackDTO = (
      await request(app.getHttpServer())
        .delete('/api/order-packs/' + entityMock.id)
        .expect(204)
    ).body;

    expect(deletedEntity).toEqual({});
  });

  afterEach(async () => {
    await app.close();
  });
});

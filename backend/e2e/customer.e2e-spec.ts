import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/core/guards/auth.guard';
import { RolesGuard } from '../src/core/guards/roles.guard';
import { CustomerDTO } from '../src/domain/dto/customer.dto';
import { CustomerService } from '../src/service/customer.service';

describe('Customer Controller', () => {
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
      .overrideProvider(CustomerService)
      .useValue(serviceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET all customers ', async () => {
    const getEntities: CustomerDTO[] = (
      await request(app.getHttpServer())
        .get('/api/customers')
        .expect(200)
    ).body;

    expect(getEntities).toEqual(entityMock);
  });

  it('/GET customers by id', async () => {
    const getEntity: CustomerDTO = (
      await request(app.getHttpServer())
        .get('/api/customers/' + entityMock.id)
        .expect(200)
    ).body;

    expect(getEntity).toEqual(entityMock);
  });

  it('/POST create customers', async () => {
    const createdEntity: CustomerDTO = (
      await request(app.getHttpServer())
        .post('/api/customers')
        .send(entityMock)
        .expect(201)
    ).body;

    expect(createdEntity).toEqual(entityMock);
  });

  it('/PUT update customers', async () => {
    const updatedEntity: CustomerDTO = (
      await request(app.getHttpServer())
        .put('/api/customers')
        .send(entityMock)
        .expect(201)
    ).body;

    expect(updatedEntity).toEqual(entityMock);
  });

  it('/DELETE customers', async () => {
    const deletedEntity: CustomerDTO = (
      await request(app.getHttpServer())
        .delete('/api/customers/' + entityMock.id)
        .expect(204)
    ).body;

    expect(deletedEntity).toEqual({});
  });

  afterEach(async () => {
    await app.close();
  });
});

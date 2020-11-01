import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/security/guards/auth.guard';
import { RolesGuard } from '../src/security/guards/roles.guard';
import ProductType from '../src/domain/product-type.entity';
import { ProductTypeService } from '../src/service/product-type.service';

describe('ProductType Controller', () => {
  let app: INestApplication;

  const authGuardMock = { canActivate: (): any => true };
  const rolesGuardMock = { canActivate: (): any => true };
  const entityMock: any = {
    id: 'entityId',
  };

  const serviceMock = {
    findById: (): any => entityMock,
    findAndCount: (): any => [entityMock, 0],
    save: (): any => entityMock,
    update: (): any => entityMock,
    delete: (): any => entityMock,
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideGuard(AuthGuard)
      .useValue(authGuardMock)
      .overrideGuard(RolesGuard)
      .useValue(rolesGuardMock)
      .overrideProvider(ProductTypeService)
      .useValue(serviceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET all product-types ', async () => {
    const getEntities: ProductType[] = (await request(app.getHttpServer()).get('/api/product-types').expect(200)).body;

    expect(getEntities).toEqual(entityMock);
  });

  it('/GET product-types by id', async () => {
    const getEntity: ProductType = (
      await request(app.getHttpServer())
        .get('/api/product-types/' + entityMock.id)
        .expect(200)
    ).body;

    expect(getEntity).toEqual(entityMock);
  });

  it('/POST create product-types', async () => {
    const createdEntity: ProductType = (await request(app.getHttpServer()).post('/api/product-types').send(entityMock).expect(201)).body;

    expect(createdEntity).toEqual(entityMock);
  });

  it('/PUT update product-types', async () => {
    const updatedEntity: ProductType = (await request(app.getHttpServer()).put('/api/product-types').send(entityMock).expect(201)).body;

    expect(updatedEntity).toEqual(entityMock);
  });

  it('/DELETE product-types', async () => {
    const deletedEntity: ProductType = (
      await request(app.getHttpServer())
        .delete('/api/product-types/' + entityMock.id)
        .expect(204)
    ).body;

    expect(deletedEntity).toEqual({});
  });

  afterEach(async () => {
    await app.close();
  });
});

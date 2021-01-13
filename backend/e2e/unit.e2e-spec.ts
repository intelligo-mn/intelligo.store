import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/core/guards/auth.guard';
import { RolesGuard } from '../src/core/guards/roles.guard';
import { UnitDTO } from '../src/domain/dto/unit.dto';
import { UnitService } from '../src/service/unit.service';

describe('Unit Controller', () => {
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
      .overrideProvider(UnitService)
      .useValue(serviceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET all units ', async () => {
    const getEntities: UnitDTO[] = (
      await request(app.getHttpServer())
        .get('/api/units')
        .expect(200)
    ).body;

    expect(getEntities).toEqual(entityMock);
  });

  it('/GET units by id', async () => {
    const getEntity: UnitDTO = (
      await request(app.getHttpServer())
        .get('/api/units/' + entityMock.id)
        .expect(200)
    ).body;

    expect(getEntity).toEqual(entityMock);
  });

  it('/POST create units', async () => {
    const createdEntity: UnitDTO = (
      await request(app.getHttpServer())
        .post('/api/units')
        .send(entityMock)
        .expect(201)
    ).body;

    expect(createdEntity).toEqual(entityMock);
  });

  it('/PUT update units', async () => {
    const updatedEntity: UnitDTO = (
      await request(app.getHttpServer())
        .put('/api/units')
        .send(entityMock)
        .expect(201)
    ).body;

    expect(updatedEntity).toEqual(entityMock);
  });

  it('/DELETE units', async () => {
    const deletedEntity: UnitDTO = (
      await request(app.getHttpServer())
        .delete('/api/units/' + entityMock.id)
        .expect(204)
    ).body;

    expect(deletedEntity).toEqual({});
  });

  afterEach(async () => {
    await app.close();
  });
});

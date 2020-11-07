import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import KinderGarden from '../src/domain/kinder-garden.entity';
import { KinderGardenService } from '../src/modules/kinder-garden/kinder-garden.service';
import { AuthGuard, RolesGuard } from '../src/core';

describe('KinderGarden Controller', () => {
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
      .overrideProvider(KinderGardenService)
      .useValue(serviceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET all kinder-gardens ', async () => {
    const getEntities: KinderGarden[] = (await request(app.getHttpServer()).get('/api/kinder-gardens').expect(200)).body;

    expect(getEntities).toEqual(entityMock);
  });

  it('/GET kinder-gardens by id', async () => {
    const getEntity: KinderGarden = (
      await request(app.getHttpServer())
        .get('/api/kinder-gardens/' + entityMock.id)
        .expect(200)
    ).body;

    expect(getEntity).toEqual(entityMock);
  });

  it('/POST create kinder-gardens', async () => {
    const createdEntity: KinderGarden = (await request(app.getHttpServer()).post('/api/kinder-gardens').send(entityMock).expect(201)).body;

    expect(createdEntity).toEqual(entityMock);
  });

  it('/PUT update kinder-gardens', async () => {
    const updatedEntity: KinderGarden = (await request(app.getHttpServer()).put('/api/kinder-gardens').send(entityMock).expect(201)).body;

    expect(updatedEntity).toEqual(entityMock);
  });

  it('/DELETE kinder-gardens', async () => {
    const deletedEntity: KinderGarden = (
      await request(app.getHttpServer())
        .delete('/api/kinder-gardens/' + entityMock.id)
        .expect(204)
    ).body;

    expect(deletedEntity).toEqual({});
  });

  afterEach(async () => {
    await app.close();
  });
});

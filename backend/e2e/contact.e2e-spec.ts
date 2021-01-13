import { Test, TestingModule } from '@nestjs/testing';
import request = require('supertest');
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import { AuthGuard } from '../src/core/guards/auth.guard';
import { RolesGuard } from '../src/core/guards/roles.guard';
import { ContactDTO } from '../src/service/dto/contact.dto';
import { ContactService } from '../src/service/contact.service';

describe('Contact Controller', () => {
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
      .overrideProvider(ContactService)
      .useValue(serviceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET all contacts ', async () => {
    const getEntities: ContactDTO[] = (
      await request(app.getHttpServer())
        .get('/api/contacts')
        .expect(200)
    ).body;

    expect(getEntities).toEqual(entityMock);
  });

  it('/GET contacts by id', async () => {
    const getEntity: ContactDTO = (
      await request(app.getHttpServer())
        .get('/api/contacts/' + entityMock.id)
        .expect(200)
    ).body;

    expect(getEntity).toEqual(entityMock);
  });

  it('/POST create contacts', async () => {
    const createdEntity: ContactDTO = (
      await request(app.getHttpServer())
        .post('/api/contacts')
        .send(entityMock)
        .expect(201)
    ).body;

    expect(createdEntity).toEqual(entityMock);
  });

  it('/PUT update contacts', async () => {
    const updatedEntity: ContactDTO = (
      await request(app.getHttpServer())
        .put('/api/contacts')
        .send(entityMock)
        .expect(201)
    ).body;

    expect(updatedEntity).toEqual(entityMock);
  });

  it('/DELETE contacts', async () => {
    const deletedEntity: ContactDTO = (
      await request(app.getHttpServer())
        .delete('/api/contacts/' + entityMock.id)
        .expect(204)
    ).body;

    expect(deletedEntity).toEqual({});
  });

  afterEach(async () => {
    await app.close();
  });
});

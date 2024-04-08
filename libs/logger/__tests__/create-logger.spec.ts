import { faker } from '@faker-js/faker';
import { Logger } from 'winston';
import createLogger from '../src/create-logger';

describe('createLogger', () => {
  it('Should create logger object', () => {
    const logger = createLogger(faker.lorem.word());

    expect(logger).toBeInstanceOf(Logger);
  });
});

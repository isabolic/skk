import { Transform } from 'class-transformer';

function Default(defaultValue: any) {
  return Transform(({ value }) => {
    return value !== null && value !== undefined ? value : defaultValue;
  });
}

export { Default };

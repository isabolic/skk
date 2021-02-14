import {
  plainToClass,
  ClassTransformOptions,
  classToPlain,
  ClassConstructor,
} from 'class-transformer';

const plainToClassOpts: ClassTransformOptions = {
  strategy: 'excludeAll',
};

const classToPlainOpts: ClassTransformOptions = {
  excludePrefixes: ['__'],
  strategy: 'excludeAll',
};

class Transformer {
  public static plainToClass(cls: ClassConstructor<any>, plain: JSON) {
    // lose reference to ObjectId of mongoDb
    const data = JSON.parse(JSON.stringify(plain));
    return plainToClass(cls, data, plainToClassOpts);
  }

  public static classToPlain(cls: ClassConstructor<any>) {
    return classToPlain(cls, classToPlainOpts);
  }
}

export { Transformer };

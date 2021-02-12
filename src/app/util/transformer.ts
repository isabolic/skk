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
    return plainToClass(cls, plain, plainToClassOpts);
  }

  public static classToPlain(cls: ClassConstructor<any>) {
    return classToPlain(cls, classToPlainOpts);
  }
}

export { Transformer };

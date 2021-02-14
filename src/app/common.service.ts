interface CommonService<T> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
}

export { CommonService };

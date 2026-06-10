export function withTimestamp(
  _target: object,
  _propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value;

  descriptor.value = function (message: string) {
    const now = new Date();
    const timestamp = now.toISOString()
      .replace('T', ' ')
      .substring(0, 19);
    return original.call(this, `[${timestamp}] ${message}`);
  };

  return descriptor;
}

export function uppercase(
  _target: object,
  _propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value;

  descriptor.value = function (message: string) {
    return original.call(this, message.toUpperCase());
  };

  return descriptor;
}

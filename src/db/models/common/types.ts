export type UUID = string & { readonly _brand: unique symbol };

export function asUUID(id: string): UUID {
  return id as UUID;
}

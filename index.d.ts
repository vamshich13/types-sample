
declare module "myModule1" {
  import * as File1Types from "./file1";
  export default File1Types.default;
  export * from "./file1";
}

declare module "myModule2" {
  import * as File2Types from "./file2";
  export default File2Types.default;
  export * from "./file2";
}

export class authroize {
  static async checkPermission(req: any, module: string, action: string) {
    let Permission: any;
    Permission = req["permissionData"];
    if (Permission) {
      const permissionFilter = Permission.moduleName.find(
        (moduleItem: { title: string; }) => moduleItem.title === module
      );

      if (permissionFilter && permissionFilter[action]) {
        console.log(Permission, "permission");
        return true; // Permission granted
      } else {
        console.log("permission issue ");
        return false;
      }
    }
    return false;
  }
}
// Path: src/Decore/Authorize.ts

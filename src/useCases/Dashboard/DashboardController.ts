import { IDashboardController } from "./DashboardDTO";
import { DashboardUseCase } from "./DashboardCase";
import { IDashboard } from "./interfaces";

/** 
* The class to exists methods
*/
export class DashboardController implements IDashboardController {
    constructor(
        private dashboardUseCase: DashboardUseCase
    ) { }

    async handle(): Promise<IDashboard> {
        return await this.dashboardUseCase.execute()
    }
}
import { DashboardStore } from "../../service/serviece";
const store = new DashboardStore()
describe('DahboardService',()=>{
it('sould has mehode ',()=>{
    expect(store.orderedProducts).toBeDefined()
})
})
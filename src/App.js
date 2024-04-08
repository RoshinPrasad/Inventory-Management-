import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import SideNav from "./Component/SideNav";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import SalesDashboard from "./Pages/SalesDashboard";
import Products from "./Pages/inventory/Products";
import CreateProduct from "./Pages/inventory/CreateProduct";
import ExpiredProduct from "./Pages/inventory/ExpiredProduct";
import LowStoks from "./Pages/inventory/LowStoks";
import Category from "./Pages/inventory/Category";
import SubCategory from "./Pages/inventory/SubCategory";
import Brands from "./Pages/inventory/Brands";
import Units from "./Pages/inventory/Units";
import Sales from "./Pages/sales/Sales";
import Invoices from "./Pages/sales/Invoices";
import SalesReturn from "./Pages/sales/SalesReturn";
import Quotation from "./Pages/sales/Quotation";
import Customers from "./Pages/peoples/Customers";
import Suppliers from "./Pages/peoples/Suppliers";
import ManageStoke from "./Pages/stoke/ManageStoke";
import StokeAdjustment from "./Pages/stoke/StokeAdjustment";
import StokeTransfer from "./Pages/stoke/StokeTransfer";
import Purchases from "./Pages/purchase/Purchases";
import PurchaseOrder from "./Pages/purchase/PurchaseOrder";
import PurchaseReturn from "./Pages/purchase/PurchaseReturn";
import Expenses from "./Pages/expenses/Expenses";
import ExpensesCategory from "./Pages/expenses/ExpensesCategory";
import Employees from "./Pages/hrms/Employees";
import Department from "./Pages/hrms/Department";
import Designation from "./Pages/hrms/Designation";
import Shift from "./Pages/hrms/shift";
import EmployeeAttendance from "./Pages/hrms/EmployeeAttendance";
import AdminAttendance from "./Pages/hrms/AdminAttendance";
import AdminLeave from "./Pages/hrms/AdminLeave";
import EmployeeLeave from "./Pages/hrms/EmployeeLeave";
import LeaveType from "./Pages/hrms/LeaveType";
import Holiday from "./Pages/holidays/Holiday";
import Payslip from "./Pages/payroll/Payslip";
import EmployeeSalary from "./Pages/payroll/EmployeeSalary";
import SalesReport from "./Pages/reports/SalesReport";
import PurchaseReport from "./Pages/reports/PurchaseReport";
import InventoryReport from "./Pages/reports/InventoryReport";
import InvoiceReport from "./Pages/reports/InvoiceReport";
import SupplierReport from "./Pages/reports/SupplierReport";
import CustomerReport from "./Pages/reports/CustomerReport";
import ExpenseReport from "./Pages/reports/ExpenseReport";
import IncomeReport from "./Pages/reports/IncomeReport";
import TaxReports from "./Pages/reports/TaxReports";
import ProfitandLoss from "./Pages/reports/ProfitandLoss";
import Users from "./Pages/User Management/Users";
import RolesandPermissions from "./Pages/User Management/RolesandPermissions";
import DeleteAccountRequest from "./Pages/User Management/DeleteAccountRequest";
import AddNewEmployee from "./Component/AddNewEmployee";

function App() {
  return (
    <div className="App">
      <div id="global-loader" style={{ display: "none" }}>
        <div className="whirly-loader"> </div>
      </div>

      <div className="main-wrapper">
        <Routers>
          <Header />
          <SideNav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales-dash" element={<SalesDashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/create-products" element={<CreateProduct />} />
            <Route path="/expired-products" element={<ExpiredProduct />} />
            <Route path="/low-stokes" element={<LowStoks />} />
            <Route path="/category" element={<Category />} />
            <Route path="/subcategory" element={<SubCategory />} />
            <Route path="/bradns" element={<Brands />} />
            <Route path="/units" element={<Units />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/sales-returns" element={<SalesReturn />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/managestoke" element={<ManageStoke />} />
            <Route path="/stoke-adjustment" element={<StokeAdjustment />} />
            <Route path="/stoke-transfer" element={<StokeTransfer />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/purchases-order" element={<PurchaseOrder />} />
            <Route path="/purchases-return" element={<PurchaseReturn />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/expenses-category" element={<ExpensesCategory />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/department" element={<Department />} />
            <Route path="/designation" element={<Designation />} />
            <Route path="/shift" element={<Shift />} />
            <Route path="/emp-attendence" element={<EmployeeAttendance />} />
            <Route path="/admin-attendence" element={<AdminAttendance />} />
            <Route path="/admin-leave" element={<AdminLeave />} />
            <Route path="/employee-leave" element={<EmployeeLeave />} />
            <Route path="/leavetype" element={<LeaveType />} />
            <Route path="/holiday" element={<Holiday />} />
            <Route path="/employee-salary" element={<EmployeeSalary />} />
            <Route path="/payslip" element={<Payslip />} />
            <Route path="/salesReport" element={<SalesReport />} />
            <Route path="/purchaseReport" element={<PurchaseReport />} />
            <Route path="/inventoryReport" element={<InventoryReport />} />
            <Route path="/invoiceReport" element={<InvoiceReport />} />
            <Route path="/supplierReport" element={<SupplierReport />} />
            <Route path="/customerreport" element={<CustomerReport />} />
            <Route path="/expensereport" element={<ExpenseReport />} />
            <Route path="/incomereport" element={<IncomeReport />} />
            <Route path="/taxreport" element={<TaxReports />} />
            <Route path="/profitandloss" element={<ProfitandLoss />} />
            <Route path="/users" element={<Users />} />
            <Route path="/newemployee" element={<AddNewEmployee />} />
            <Route
              path="/rolesandpermissions"
              element={<RolesandPermissions />}
            />
            <Route
              path="/deleteaccountrequest"
              element={<DeleteAccountRequest />}
            />
          </Routes>
        </Routers>
      </div>
    </div>
  );
}

export default App;

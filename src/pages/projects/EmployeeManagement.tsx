import React, { useState } from 'react';
import { Users, UserPlus, Trash2, Search, ArrowLeft, Mail, Phone, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Employee {
    id: number;
    name: string;
    role: string;
    department: string;
    email: string;
    phone: string;
    status: 'Active' | 'On Leave' | 'Terminated';
}

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState<Employee[]>([
        { id: 1, name: "Alice Johnson", role: "Software Engineer", department: "Engineering", email: "alice@company.com", phone: "+1 234 567 890", status: "Active" },
        { id: 2, name: "Bob Smith", role: "Product Manager", department: "Product", email: "bob@company.com", phone: "+1 234 567 891", status: "Active" },
        { id: 3, name: "Charlie Brown", role: "Designer", department: "Design", email: "charlie@company.com", phone: "+1 234 567 892", status: "On Leave" },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [newEmployee, setNewEmployee] = useState<Partial<Employee>>({
        name: '', role: '', department: '', email: '', phone: '', status: 'Active'
    });

    const handleDelete = (id: number) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    const handleAddEmployee = (e: React.FormEvent) => {
        e.preventDefault();
        if (newEmployee.name && newEmployee.role) {
            setEmployees([...employees, { ...newEmployee, id: Date.now() } as Employee]);
            setShowAddModal(false);
            setNewEmployee({ name: '', role: '', department: '', email: '', phone: '', status: 'Active' });
        }
    };

    const [view, setView] = useState<'employees' | 'departments'>('employees');

    // Calculate department stats
    const departments = employees.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition-transform transform md:translate-x-0 -translate-x-full z-30">
                <div className="p-6">
                    <h1 className="text-2xl font-bold flex items-center">
                        <Users className="mr-2" /> HR System
                    </h1>
                </div>
                <nav className="mt-6">
                    <Link to="/" className="flex items-center px-6 py-3 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                        <ArrowLeft className="h-5 w-5 mr-3" /> Back to Portfolio
                    </Link>
                    <button
                        onClick={() => setView('employees')}
                        className={`w-full flex items-center px-6 py-3 transition-colors ${view === 'employees' ? 'bg-gray-800 text-white border-r-4 border-indigo-500' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                    >
                        <Users className="h-5 w-5 mr-3" /> Employees
                    </button>
                    <button
                        onClick={() => setView('departments')}
                        className={`w-full flex items-center px-6 py-3 transition-colors ${view === 'departments' ? 'bg-gray-800 text-white border-r-4 border-indigo-500' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                    >
                        <Briefcase className="h-5 w-5 mr-3" /> Departments
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="md:ml-64 p-8">
                {view === 'employees' ? (
                    <>
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800">Employees</h2>
                                <p className="text-gray-500">Manage your team members</p>
                            </div>
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex items-center shadow-md transition-all hover:scale-105"
                            >
                                <UserPlus className="h-5 w-5 mr-2" /> Add Employee
                            </button>
                        </div>

                        {/* Search & Filter */}
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex items-center space-x-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Search employees..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <select className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                <option>All Departments</option>
                                <option>Engineering</option>
                                <option>Product</option>
                                <option>Design</option>
                            </select>
                        </div>

                        {/* Employee Table */}
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {employees.map((employee) => (
                                        <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                                        {employee.name.charAt(0)}
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                                                        <div className="text-sm text-gray-500">{employee.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{employee.role}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{employee.department}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${employee.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                        employee.status === 'On Leave' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'}`}>
                                                    {employee.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="flex space-x-2">
                                                    <Mail className="h-4 w-4 hover:text-indigo-600 cursor-pointer" />
                                                    <Phone className="h-4 w-4 hover:text-indigo-600 cursor-pointer" />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => handleDelete(employee.id)} className="text-red-600 hover:text-red-900">
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Departments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(departments).map(([name, count]) => (
                                <div key={name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-indigo-100 rounded-lg">
                                            <Briefcase className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <span className="text-2xl font-bold text-gray-900">{count}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                                    <p className="text-gray-500 mt-1">Active Employees</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Add Employee Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">Add New Employee</h3>
                        <form onSubmit={handleAddEmployee} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={newEmployee.name}
                                    onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={newEmployee.role}
                                    onChange={e => setNewEmployee({ ...newEmployee, role: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Department</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={newEmployee.department}
                                    onChange={e => setNewEmployee({ ...newEmployee, department: e.target.value })}
                                />
                            </div>
                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowAddModal(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                >
                                    Add Employee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeManagement;

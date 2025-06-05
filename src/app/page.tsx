'use client';

import Image from "next/image";
import { useState } from 'react';
import { 
  Home, 
  BarChart3, 
  FileText, 
  Package, 
  CreditCard, 
  Inbox, 
  Users, 
  Settings, 
  HelpCircle, 
  Moon, 
  Sun, 
  LogOut,
  Search,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  Calendar,
  MoreHorizontal,
  Plus,
  ArrowUpRight,
  Building2,
  Wallet,
  Menu,
  X
} from "lucide-react";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background-primary min-h-screen flex">
      {/* 移动端遮罩层 */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* 侧边导航栏 */}
      <div className={`bg-white w-[280px] h-screen fixed left-0 top-0 border-r border-[#f3f5f7] z-50 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:block`}>
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-8">
          <div className="flex items-center">
            <div className="w-7 h-7 bg-primary-500 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <h1 className="text-xl font-bold text-black tracking-tight">Sample.com</h1>
          </div>
          {/* 移动端关闭按钮 */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5 text-secondary-400" />
          </button>
        </div>

        {/* 主菜单 */}
        <div className="px-6">
          <div className="mb-6">
            <p className="text-xs text-secondary-300 mb-4 font-medium uppercase tracking-wide">Main Menu</p>
            <nav className="space-y-2">
              {/* Dashboard - Active */}
              <div className="bg-primary-500 rounded-lg px-4 py-2.5 flex items-center">
                <Home className="w-5 h-5 mr-3 text-white" />
                <span className="text-white font-semibold text-sm">Dashboard</span>
              </div>

              {/* 其他菜单项 */}
              {[
                { name: 'Insight', icon: BarChart3 },
                { name: 'Invoices', icon: FileText },
                { name: 'Products', icon: Package },
                { name: 'Reimburse', icon: CreditCard },
                { name: 'Inbox', icon: Inbox },
                { name: 'People & Teams', icon: Users }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.name} className="flex items-center px-4 py-2.5 text-secondary-400 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <IconComponent className="w-5 h-5 mr-3" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* 偏好设置 */}
          <div>
            <p className="text-xs text-secondary-300 mb-4 font-medium uppercase tracking-wide">Preferences</p>
            <nav className="space-y-2">
              {[
                { name: 'Settings', icon: Settings },
                { name: 'Help & Center', icon: HelpCircle }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.name} className="flex items-center px-4 py-2.5 text-secondary-400 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <IconComponent className="w-5 h-5 mr-3" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                );
              })}
              
              {/* Dark Mode Toggle */}
              <div className="flex items-center justify-between px-4 py-2.5">
                <div className="flex items-center">
                  <Moon className="w-5 h-5 mr-3 text-secondary-400" />
                  <span className="font-medium text-sm text-secondary-400">Dark Mode</span>
                </div>
                <div className="w-16 h-8 bg-[#f6f7f9] rounded-full relative cursor-pointer">
                  <div className="w-7 h-7 bg-[#7c5cfc] rounded-full absolute left-0.5 top-0.5 flex items-center justify-center transition-transform">
                    <Sun className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Log Out */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center px-4 py-2.5 text-secondary-400 hover:bg-gray-50 rounded-lg cursor-pointer">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium text-sm">Log Out</span>
          </div>
        </div>
      </div>

      {/* 主内容区域 */}
      <div className="lg:ml-[280px] flex-1 min-h-screen">
        {/* 顶部导航栏 */}
        <div className="bg-white h-16 border-b border-[#f3f5f7] flex items-center justify-between px-4 lg:px-8">
          {/* 移动端菜单按钮 */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6 text-secondary-400" />
          </button>

          {/* 搜索栏 */}
          <div className="flex-1 max-w-[492px] ml-4 lg:ml-0">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-secondary-400" />
              </div>
              <input
                type="text"
                placeholder="Search something here"
                className="w-full h-10 lg:h-11 pl-12 pr-4 bg-white border border-[#c3d4e9] rounded-full text-sm text-secondary-400 focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>

          {/* 用户信息 */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* 通知 */}
            <div className="relative">
              <div className="w-10 h-10 lg:w-11 lg:h-11 bg-white border border-[#c3d4e9] rounded-full flex items-center justify-center">
                <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-[#292d32]" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-error-500 rounded-full"></div>
            </div>

            {/* 用户头像和信息 */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                  alt="leoleexh"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-secondary-500 hidden sm:block">leoleexh</span>
              <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-secondary-400" />
            </div>
          </div>
        </div>

        {/* 仪表板内容 */}
        <div className="p-4 lg:p-6">
          {/* 主要布局：左右两列 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* 左侧列 */}
            <div className="lg:col-span-2 space-y-6">
              {/* 支出统计图表 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 lg:p-6 h-auto lg:h-[320px]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-secondary-500">Spending Statistics</h2>
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 bg-[#f6f7f9] rounded flex items-center justify-center hover:bg-gray-200">
                      <ChevronLeft className="w-3 h-3 text-[#596780]" />
                    </button>
                    <span className="font-semibold text-secondary-500 text-sm">2024</span>
                    <button className="w-6 h-6 bg-[#f6f7f9] rounded flex items-center justify-center hover:bg-gray-200">
                      <ChevronRight className="w-3 h-3 text-[#596780]" />
                    </button>
                  </div>
                </div>

                {/* 图表区域 */}
                <div className="relative h-[180px] lg:h-[220px] flex items-end justify-center space-x-4 overflow-x-auto">
                  {/* Y轴标签 */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#90a3bf]">
                    <span>$15k</span>
                    <span>$10k</span>
                    <span>$5k</span>
                    <span>$1k</span>
                    <span>$500</span>
                  </div>

                  {/* 柱状图 */}
                  <div className="flex items-end space-x-3 ml-16">
                    {[
                      { month: 'Jan', height: 148, color: '#725cff' },
                      { month: 'Feb', height: 82, color: '#725cff' },
                      { month: 'Mar', height: 168, color: '#725cff' },
                      { month: 'Apr', height: 120, color: '#725cff' },
                      { month: 'Mei', height: 96, color: '#725cff' },
                      { month: 'Jun', height: 180, color: '#1c1e23' },
                      { month: 'Jul', height: 120, color: '#725cff' },
                      { month: 'Aug', height: 130, color: '#725cff' },
                      { month: 'Sep', height: 180, color: '#725cff' },
                      { month: 'Oct', height: 158, color: '#725cff' },
                      { month: 'Nov', height: 120, color: '#725cff' },
                      { month: 'Des', height: 167, color: '#725cff' }
                    ].map((bar, index) => (
                      <div key={bar.month} className="flex flex-col items-center">
                        <div
                          className="w-3 rounded-t-full"
                          style={{
                            height: `${bar.height}px`,
                            backgroundColor: bar.color
                          }}
                        ></div>
                        <span className={`text-xs mt-2 ${index === 5 ? 'font-bold text-[#14171f] bg-gray-100 px-2 py-1 rounded' : 'text-[#90a3bf]'}`}>
                          {bar.month}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 支出提示框 */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-[#1c1e23] text-white px-4 py-2 rounded-lg shadow-lg">
                    <div className="text-xs">Expense</div>
                    <div className="text-sm font-semibold">$15.030</div>
                  </div>
                </div>
              </div>

              {/* 收入支出对比 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 lg:p-6 h-auto lg:h-[188px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-4 lg:gap-0 relative">
                  {/* 总收入 */}
                  <div className="lg:pr-8">
                    <h3 className="text-sm font-semibold text-secondary-500 mb-3">Total Income</h3>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-2xl font-bold text-secondary-500">$50,530.00</span>
                      <span className="text-xs text-secondary-300">( USD )</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-[#f6f7f9] rounded-lg flex items-center justify-center">
                        <ArrowUp className="w-5 h-5 text-[#7fb519]" />
                      </div>
                      <p className="text-xs text-secondary-300">
                        <span className="font-bold text-success-600">20%</span> increase compared to last week
                      </p>
                    </div>
                  </div>

                  {/* 分隔线 */}
                  <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-px bg-[#f0f0f0]"></div>

                  {/* 总支出 */}
                  <div className="lg:pl-8">
                    <h3 className="text-sm font-semibold text-secondary-500 mb-3">Total Expense</h3>
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-2xl font-bold text-secondary-500">$19,760.00</span>
                      <span className="text-xs text-secondary-300">( USD )</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-[#f6f7f9] rounded-lg flex items-center justify-center">
                        <ArrowDown className="w-5 h-5 text-error-500" />
                      </div>
                      <p className="text-xs text-secondary-300">
                        <span className="font-bold text-error-500">10%</span> decrease compared to last week
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 交易历史 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 lg:p-6 h-auto lg:h-[326px]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-secondary-500">Transaction History</h2>
                  <div className="flex items-center space-x-2 border border-[#c3d4e9] rounded px-4 py-2">
                    <Calendar className="w-4 h-4 text-[#292d32]" />
                    <span className="text-xs text-[#1a202c]">1 Jan - 1 Feb 2022</span>
                  </div>
                </div>

                {/* 表头 */}
                <div className="grid grid-cols-4 gap-4 py-3 border-b border-[#f3f5f7] text-xs text-[#90a3bf] font-medium">
                  <span>Transactions</span>
                  <span>Date</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>

                {/* 交易记录 */}
                <div className="space-y-4 mt-4">
                  {[
                    {
                      icon: Building2,
                      iconBg: 'bg-blue-100',
                      iconColor: 'text-blue-600',
                      name: 'Bank Transfer',
                      date: 'Jan 01,2022',
                      amount: '$2,000.00',
                      status: 'Completed',
                      statusColor: 'bg-green-100 text-green-600'
                    },
                    {
                      icon: Wallet,
                      iconBg: 'bg-purple-100',
                      iconColor: 'text-purple-600',
                      name: 'Paypal Account',
                      date: 'Jan 04,2022',
                      amount: '$2,000.00',
                      status: 'Pending',
                      statusColor: 'bg-yellow-100 text-yellow-600'
                    },
                    {
                      icon: Building2,
                      iconBg: 'bg-green-100',
                      iconColor: 'text-green-600',
                      name: 'Bank Transfer',
                      date: 'Jan 06,2022',
                      amount: '$2,000.00',
                      status: 'On Hold',
                      statusColor: 'bg-red-100 text-red-600'
                    }
                  ].map((transaction, index) => {
                    const IconComponent = transaction.icon;
                    return (
                      <div key={index} className="grid grid-cols-4 gap-4 py-3 items-center">
                        <div className="flex items-center space-x-3">
                          <div className={`w-9 h-9 ${transaction.iconBg} rounded-full flex items-center justify-center`}>
                            <IconComponent className={`w-5 h-5 ${transaction.iconColor}`} />
                          </div>
                          <span className="font-semibold text-[#1a202c] text-sm">{transaction.name}</span>
                        </div>
                        <span className="font-semibold text-[#1a202c] text-sm">{transaction.date}</span>
                        <span className="font-semibold text-[#1a202c] text-sm">{transaction.amount}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${transaction.statusColor}`}>
                          {transaction.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 右侧列 */}
            <div className="space-y-6">
              {/* 余额卡片 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 lg:p-6 h-auto lg:h-[168px]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-secondary-500">Your balance</h3>
                  <button className="text-secondary-500 hover:bg-gray-100 p-1 rounded">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-2xl font-bold text-secondary-500">$120,435.00</span>
                  <span className="text-xs text-secondary-300">( USD )</span>
                </div>
                <p className="text-xs text-secondary-300 mb-4">From Jan 01, 2022 to Jan 31, 2022</p>
                
                {/* 操作按钮 */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-primary-500 text-white py-2 px-3 rounded-lg font-semibold text-xs flex items-center justify-center space-x-1 hover:bg-[#6b4ce6] transition-colors">
                    <Plus className="w-3 h-3" />
                    <span>Top Up</span>
                  </button>
                  <button className="flex-1 bg-white border border-primary-500 text-primary-500 py-2 px-3 rounded-lg font-semibold text-xs flex items-center justify-center space-x-1 hover:bg-[#f8f6ff] transition-colors">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>Transfer</span>
                  </button>
                </div>
              </div>

              {/* 分类支出饼图 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 lg:p-6 h-auto lg:h-[646px]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-secondary-500">Spend by category</h2>
                  <button className="text-[#1a202c] hover:bg-gray-100 p-1 rounded">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* 饼图 */}
                <div className="relative w-[200px] h-[200px] mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* 饼图扇形 */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#eb7ca6"
                      strokeWidth="20"
                      strokeDasharray="40.5 251.2"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#ffacc8"
                      strokeWidth="20"
                      strokeDasharray="10.8 251.2"
                      strokeDashoffset="-40.5"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#cc6ff8"
                      strokeWidth="20"
                      strokeDasharray="7.6 251.2"
                      strokeDashoffset="-51.3"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#7c5cfc"
                      strokeWidth="20"
                      strokeDasharray="11.4 251.2"
                      strokeDashoffset="-58.9"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#5caffc"
                      strokeWidth="20"
                      strokeDasharray="22.2 251.2"
                      strokeDashoffset="-70.3"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#a1a9fe"
                      strokeWidth="20"
                      strokeDasharray="5.1 251.2"
                      strokeDashoffset="-92.5"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-sm">
                      <div className="text-xs text-secondary-400">Overall Spending</div>
                      <div className="text-lg font-bold text-secondary-500">$19,760.00</div>
                    </div>
                  </div>
                </div>

                {/* 分类列表 */}
                <div className="space-y-3">
                  {[
                    { name: 'Employees Salary', amount: '$8.000.00', color: 'bg-[#eb7ca6]' },
                    { name: 'Material Supplies', amount: '$2.130.00', color: 'bg-[#ffacc8]' },
                    { name: 'Company tax', amount: '$1.510.00', color: 'bg-[#cc6ff8]' },
                    { name: 'Maintenance system', amount: '$2.245.00', color: 'bg-[#7c5cfc]' },
                    { name: 'Development System', amount: '$4.385.00', color: 'bg-[#5caffc]' },
                    { name: 'Production Tools', amount: '$1.000.00', color: 'bg-[#a1a9fe]' }
                  ].map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span className="text-xs text-[#596780]">{category.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-[#1a202c]">{category.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

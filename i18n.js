"use strict";

// ─── i18n ───────────────────────────────────────────────────────────────────
// Lightweight translation module. Add keys here to support new languages.
// Usage: t("key") returns the string for the current locale.

const LANG_KEY = "financeTrackerLang";

const translations = {
  en: {
    // Header
    eyebrow: "Personal Finance",
    title: "Advanced Finance Tracker",
    subtitle: "Track income, expenses, and your balance with clarity.",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    exportCsv: "Export CSV",
    resetFilters: "Reset Filters",
    langToggle: "中文",

    // Summary
    totalBalance: "Total Balance",
    totalIncome: "Total Income",
    totalExpenses: "Total Expenses",

    // Chart
    cashFlow: "Cash Flow Overview",
    incomeVsExpense: "Income vs Expense",
    chartIncome: "Income",
    chartExpense: "Expense",

    // Form
    addTransaction: "Add Transaction",
    labelTitle: "Title",
    labelAmount: "Amount",
    labelCategory: "Category",
    labelDate: "Date",
    placeholderTitle: "e.g., Freelance Payment",
    placeholderAmount: "e.g., 1200.50 or -45.99",
    placeholderSearch: "Start typing...",
    selectCategory: "Select category",
    submitBtn: "Add Transaction",
    saveChanges: "Save Changes",
    cancelEdit: "Cancel Edit",

    // Categories
    catSalary: "Salary",
    catBusiness: "Business",
    catInvestments: "Investments",
    catHousing: "Housing",
    catFood: "Food",
    catTransport: "Transport",
    catHealth: "Health",
    catEntertainment: "Entertainment",
    catEducation: "Education",
    catOther: "Other",

    // Filters
    filtersTitle: "Filters & Search",
    filterCategory: "Category",
    filterType: "Type",
    allCategories: "All categories",
    filterAll: "All",
    filterIncome: "Income",
    filterExpense: "Expense",
    searchByTitle: "Search by title",

    // Transactions
    transactionsTitle: "Transactions",
    results: (n) => `${n} results`,
    noTransactions: "No transactions yet. Add your first one to get started.",
    addFirst: "Add First Transaction",

    // Modal
    deleteTitle: "Delete transaction?",
    deleteText: "This action cannot be undone.",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    deleteBtn: "Delete",

    // Toast
    toastAdded: "Transaction added.",
    toastUpdated: "Transaction updated.",
    toastDeleted: "Transaction deleted.",
    toastEditing: "Editing mode enabled.",
    toastNoData: "No data to export.",
    toastCsvExported: "CSV exported.",
    toastFixFields: "Please fix the highlighted fields.",
    toastErrorStorageUnavailable:
      "LocalStorage is unavailable. Your transactions will not be saved.",
    toastErrorBrokenStorage:
      "Broken records in storage, replaced with empty array.",

    // Validation
    errTitle: "Title is required.",
    errTitleLength: "Title must be 80 characters or fewer.",
    errAmount: "Enter a valid amount.",
    errAmountRange: "Amount must be between -99999999.99 and 99999999.99.",
    errCategory: "Select a category.",
    errDate: "Pick a date.",

    // Error log
    errorStorageUnavailable: (e) =>
      `LocalStorage or its function(s) unavailable: ${e}.`,
    errorBrokenStorage: (e) =>
      `Broken records in storage: ${e}\nHas replaced with empty array.`,
    errorQuotaExceeded:
      "Cannot save transaction to local storage: quota limit reached.",
    errorCannotDelete: (i) => `Nothing to delete: transaction ${i} not found.`,
    
    // Cookie banner
    cookieText: "We use localStorage to save your data locally. No cookies are sent to any server.",
    cookieAccept: "Accept",
    cookieDecline: "Decline",
    privacyLink: "Privacy Policy",

    // Privacy Policy
    privacyTitle: "Privacy Policy",
    privacyBody: `This app stores your financial data exclusively in your browser's localStorage. No data is transmitted to any server, third party, or analytics service. You can clear your data at any time by clearing your browser's site data. We do not use tracking cookies.`,
    privacyClose: "Close",
  },

  zh: {
    eyebrow: "个人财务",
    title: "财务支出追踪",
    subtitle: "清晰地追踪您的收入、支出与余额。",
    darkMode: "深色模式",
    lightMode: "浅色模式",
    exportCsv: "导出 CSV",
    resetFilters: "重置筛选",
    langToggle: "English",

    totalBalance: "总余额",
    totalIncome: "总收入",
    totalExpenses: "总支出",

    cashFlow: "现金流概览",
    incomeVsExpense: "收入 vs 支出",
    chartIncome: "收入",
    chartExpense: "支出",

    addTransaction: "添加记录",
    labelTitle: "标题",
    labelAmount: "金额",
    labelCategory: "分类",
    labelDate: "日期",
    placeholderTitle: "例：自由职业收款",
    placeholderAmount: "例：1200.50 或 -45.99",
    placeholderSearch: "输入搜索...",
    selectCategory: "选择分类",
    submitBtn: "添加记录",
    saveChanges: "保存修改",
    cancelEdit: "取消编辑",

    catSalary: "工资",
    catBusiness: "商业",
    catInvestments: "投资",
    catHousing: "住房",
    catFood: "餐饮",
    catTransport: "交通",
    catHealth: "医疗",
    catEntertainment: "娱乐",
    catEducation: "教育",
    catOther: "其他",

    filtersTitle: "筛选与搜索",
    filterCategory: "分类",
    filterType: "类型",
    allCategories: "全部分类",
    filterAll: "全部",
    filterIncome: "收入",
    filterExpense: "支出",
    searchByTitle: "按标题搜索",

    transactionsTitle: "交易记录",
    results: (n) => `${n} 条结果`,
    noTransactions: "暂无记录，添加您的第一笔交易吧。",
    addFirst: "添加第一笔记录",

    deleteTitle: "删除记录？",
    deleteText: "此操作不可撤销。",
    cancel: "取消",
    delete: "删除",
    edit: "编辑",
    deleteBtn: "删除",

    toastAdded: "记录已添加。",
    toastUpdated: "记录已更新。",
    toastDeleted: "记录已删除。",
    toastEditing: "已进入编辑模式。",
    toastNoData: "暂无数据可导出。",
    toastCsvExported: "CSV 已导出。",
    toastFixFields: "请修正标记的字段。",
    toastErrorStorageUnavailable: "本地存储不可用，您的记录将不会被保存。",
    toastErrorBrokenStorage: "存储记录损坏，已创建空记录替换。",

    errTitle: "标题不能为空。",
    errTitleLength: "标题不能超过80个字符。",
    errAmount: "请输入有效金额。",
    errAmountRange: "金额范围必须在 -99999999.99 至 99999999.99 之间。",
    errCategory: "请选择分类。",
    errDate: "请选择日期。",

    errorStorageUnavailable: (e) => `LocalStorage或其函数不可用：${e}。`,
    errorBrokenStorage: (e) => `存储记录损坏：${e}\n已创建空记录替换。`,
    errorQuotaExceeded: "无法保存记录到本地存储：已达容量上限。",
    errorCannotDelete: (i) => `未找到记录${i}，未进行删除。`,

    cookieText: "本应用仅使用 localStorage 在本地保存您的数据，不向任何服务器发送信息。",
    cookieAccept: "接受",
    cookieDecline: "拒绝",
    privacyLink: "隐私政策",

    privacyTitle: "隐私政策",
    privacyBody: `本应用仅将您的财务数据存储在浏览器的 localStorage 中，不向任何服务器、第三方或分析服务传输数据。您可随时通过清除浏览器站点数据来删除所有记录。本应用不使用追踪 Cookie。`,
    privacyClose: "关闭",
  },
};

// i18n state
const i18n = {
  locale: storageAvailable ? (localStorage.getItem(LANG_KEY) || "en") : "en",

  // Returns translated string for key; supports function values (e.g. plurals)
  t(key, ...args) {
    const val = translations[this.locale][key] ?? translations["en"][key] ?? key;
    return typeof val === "function" ? val(...args) : val;
  },

  // Switch locale and persist
  setLocale(lang) {
    this.locale = lang;
    if (storageAvailable) {
      localStorage.setItem(LANG_KEY, lang);
    }
  },
};
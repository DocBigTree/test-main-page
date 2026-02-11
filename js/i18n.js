// Internationalization (i18n) - Language Switcher

const translations = {
    en: {
        // Hero Section
        'hero.title': 'Solve Complex Optimization Problems at Scale',
        'hero.subtitle': 'Enterprise-grade solver for Linear Programming, Mixed-Integer Programming, and Quadratic Programming. Built for performance, designed for scale.',
        'hero.cta.trial': 'Request Free Trial',
        'hero.cta.docs': 'View Documentation',

        // Introduction Section
        'intro.title': 'What is OptVerse Solver?',
        'intro.p1': 'OptVerse Solver is Huawei\'s enterprise-grade optimization engine designed to tackle the most complex mathematical programming challenges. From supply chain optimization to resource allocation, our solver delivers optimal solutions with unmatched performance.',
        'intro.p2': 'Built on decades of research in mathematical optimization, OptVerse Solver combines cutting-edge algorithms with cloud-native architecture. Whether you\'re solving linear programs with millions of variables or mixed-integer problems with complex constraints, OptVerse delivers results faster.',
        'intro.p3': 'Our solver supports a wide range of problem types including Linear Programming (LP), Mixed-Integer Programming (MIP), Quadratic Programming (QP), and large-scale optimization scenarios. With parallel solving capabilities and API-first design, integration into your existing workflows is seamless.',
        'intro.capabilities.title': 'Key Capabilities',
        'intro.capabilities.lp': 'Linear Programming (LP) with millions of variables',
        'intro.capabilities.mip': 'Mixed-Integer Programming (MIP) for discrete optimization',
        'intro.capabilities.qp': 'Quadratic Programming (QP) for non-linear objectives',
        'intro.capabilities.scale': 'Large-scale optimization with distributed solving',
        'intro.capabilities.cloud': 'Cloud-native architecture for elastic scaling',
        'intro.capabilities.api': 'RESTful API for seamless integration',
        'intro.stat.variables': 'Variables Solved',
        'intro.stat.uptime': 'Uptime %',
        'intro.stat.faster': 'x Faster',

        // Capabilities Section
        'capabilities.title': 'Comprehensive Optimization Capabilities',
        'cap.lp.title': 'Linear Programming',
        'cap.lp.desc': 'Solve LP problems with millions of variables and constraints. Optimized simplex and interior-point methods.',
        'cap.mip.title': 'Mixed-Integer Programming',
        'cap.mip.desc': 'Advanced branch-and-bound algorithms for discrete optimization. Handle complex combinatorial problems.',
        'cap.qp.title': 'Quadratic Programming',
        'cap.qp.desc': 'Solve non-linear objectives with quadratic terms. Portfolio optimization and machine learning applications.',
        'cap.scale.title': 'Large-Scale Optimization',
        'cap.scale.desc': 'Distributed solving for problems with billions of variables. Elastic scaling on cloud infrastructure.',
        'cap.parallel.title': 'Parallel Solving',
        'cap.parallel.desc': 'Multi-threaded algorithms leverage modern CPU architectures. Reduce solve times by orders of magnitude.',
        'cap.cloud.title': 'Cloud-Native Architecture',
        'cap.cloud.desc': 'Kubernetes-ready deployment. Auto-scaling, high availability, and seamless cloud integration.',
        'cap.api.title': 'API-First Design',
        'cap.api.desc': 'RESTful API with comprehensive SDKs. Python, Java, C++ client libraries for easy integration.',
        'cap.support.title': 'Enterprise Support',
        'cap.support.desc': '24/7 technical support, dedicated account management, and custom algorithm development services.',

        // GitHub Section
        'github.title': 'Explore on GitHub',
        'github.desc': 'Enterprise optimization solver for LP, MIP, and QP',
        'github.link': 'View on GitHub →',
        'github.quickstart': 'Quick Start',
        'github.copy': 'Copy',

        // Documentation Section
        'docs.title': 'Documentation & Resources',
        'docs.getting-started.title': 'Getting Started Guide',
        'docs.getting-started.desc': 'Installation, configuration, and your first optimization problem in 5 minutes.',
        'docs.api.title': 'API Reference',
        'docs.api.desc': 'Complete API documentation with examples for all solver methods and parameters.',
        'docs.tutorials.title': 'Tutorials & Examples',
        'docs.tutorials.desc': 'Step-by-step tutorials for common optimization scenarios and use cases.',
        'docs.performance.title': 'Performance Tuning',
        'docs.performance.desc': 'Optimization techniques, algorithm selection, and performance benchmarking.',
        'docs.migration.title': 'Migration Guide',
        'docs.migration.desc': 'Migrate from other solvers with compatibility guides and code examples.',
        'docs.releases.title': 'Release Notes',
        'docs.releases.desc': 'Latest features, improvements, and breaking changes in each version.',

        // Trial Form Section
        'trial.title': 'Request Your Free Trial License',
        'trial.fullname': 'Full Name',
        'trial.email': 'Email Address',
        'trial.company': 'Company Name',
        'trial.jobtitle': 'Job Title',
        'trial.usecase': 'Use Case Description',
        'trial.usecase.placeholder': 'Describe your optimization problem and expected scale...',
        'trial.scale': 'Problem Scale',
        'trial.scale.placeholder': 'Select problem scale',
        'trial.scale.small': 'Small (< 1,000 variables)',
        'trial.scale.medium': 'Medium (1,000 - 100,000 variables)',
        'trial.scale.large': 'Large (100,000 - 1M variables)',
        'trial.scale.enterprise': 'Enterprise (> 1M variables)',
        'trial.agree': 'I agree to the',
        'trial.terms': 'Terms of Service',
        'trial.and': 'and',
        'trial.privacy': 'Privacy Policy',
        'trial.submit': 'Request Trial License',
        'trial.submitting': 'Processing...',

        // License Table
        'license.title': 'License Comparison',
        'license.feature': 'Feature',
        'license.trial': 'Trial License',
        'license.full': 'Full License',
        'license.duration': 'Duration',
        'license.duration.trial': '30 days',
        'license.duration.full': 'Annual/Perpetual',
        'license.size': 'Problem Size',
        'license.size.trial': 'Up to 100K variables',
        'license.size.full': 'Unlimited',
        'license.types': 'Solver Types',
        'license.types.trial': 'LP, MIP, QP',
        'license.types.full': 'All types + Custom',
        'license.api': 'API Access',
        'license.api.both': 'Full API',
        'license.parallel': 'Parallel Solving',
        'license.parallel.trial': 'Up to 4 threads',
        'license.parallel.full': 'Unlimited threads',
        'license.cloud': 'Cloud Deployment',
        'license.cloud.trial': 'Limited',
        'license.cloud.full': 'Full support',
        'license.support': 'Support',
        'license.support.trial': 'Email support',
        'license.support.full': '24/7 Priority support',
        'license.custom': 'Custom Algorithms',
        'license.custom.trial': 'No',
        'license.custom.full': 'Available',

        // Footer
        'footer.tagline': 'Enterprise optimization at scale',
        'footer.product': 'Product',
        'footer.resources': 'Resources',
        'footer.legal': 'Legal',
        'footer.capabilities': 'Capabilities',
        'footer.github': 'GitHub',
        'footer.documentation': 'Documentation',
        'footer.trial': 'Free Trial',
        'footer.support': 'Support',
        'footer.contact': 'Contact',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.license': 'License Agreement',
        'footer.copyright': '© 2026 Huawei Technologies Co., Ltd. All rights reserved.',

        // Modal
        'modal.title': 'Trial Request Submitted',
        'modal.message': 'Thank you for your interest in OptVerse Solver. Our team will review your request and send your trial license to',
        'modal.message2': 'within 24 hours.',
        'modal.close': 'Close'
    },
    zh: {
        // Hero Section
        'hero.title': '大规模求解复杂优化问题',
        'hero.subtitle': '企业级线性规划、混合整数规划和二次规划求解器。为性能而生，为规模而设计。',
        'hero.cta.trial': '申请免费试用',
        'hero.cta.docs': '查看文档',

        // Introduction Section
        'intro.title': '什么是 OptVerse Solver？',
        'intro.p1': 'OptVerse Solver 是华为企业级优化引擎，专为解决最复杂的数学规划挑战而设计。从供应链优化到资源分配，我们的求解器以无与伦比的性能提供最优解决方案。',
        'intro.p2': '基于数十年的数学优化研究，OptVerse Solver 将前沿算法与云原生架构相结合。无论您是求解具有数百万变量的线性规划，还是具有复杂约束的混合整数问题，OptVerse 都能更快地提供结果。',
        'intro.p3': '我们的求解器支持广泛的问题类型，包括线性规划（LP）、混合整数规划（MIP）、二次规划（QP）和大规模优化场景。凭借并行求解能力和 API 优先设计，可无缝集成到您现有的工作流程中。',
        'intro.capabilities.title': '核心能力',
        'intro.capabilities.lp': '支持数百万变量的线性规划（LP）',
        'intro.capabilities.mip': '用于离散优化的混合整数规划（MIP）',
        'intro.capabilities.qp': '用于非线性目标的二次规划（QP）',
        'intro.capabilities.scale': '分布式求解的大规模优化',
        'intro.capabilities.cloud': '弹性扩展的云原生架构',
        'intro.capabilities.api': '无缝集成的 RESTful API',
        'intro.stat.variables': '求解变量数',
        'intro.stat.uptime': '正常运行时间 %',
        'intro.stat.faster': '倍速度提升',

        // Capabilities Section
        'capabilities.title': '全面的优化能力',
        'cap.lp.title': '线性规划',
        'cap.lp.desc': '求解具有数百万变量和约束的 LP 问题。优化的单纯形法和内点法。',
        'cap.mip.title': '混合整数规划',
        'cap.mip.desc': '用于离散优化的高级分支定界算法。处理复杂的组合问题。',
        'cap.qp.title': '二次规划',
        'cap.qp.desc': '求解具有二次项的非线性目标。投资组合优化和机器学习应用。',
        'cap.scale.title': '大规模优化',
        'cap.scale.desc': '分布式求解数十亿变量的问题。云基础设施上的弹性扩展。',
        'cap.parallel.title': '并行求解',
        'cap.parallel.desc': '多线程算法利用现代 CPU 架构。将求解时间缩短几个数量级。',
        'cap.cloud.title': '云原生架构',
        'cap.cloud.desc': 'Kubernetes 就绪部署。自动扩展、高可用性和无缝云集成。',
        'cap.api.title': 'API 优先设计',
        'cap.api.desc': '具有全面 SDK 的 RESTful API。Python、Java、C++ 客户端库，易于集成。',
        'cap.support.title': '企业支持',
        'cap.support.desc': '7×24 技术支持、专属客户经理和定制算法开发服务。',

        // GitHub Section
        'github.title': '在 GitHub 上探索',
        'github.desc': '用于 LP、MIP 和 QP 的企业优化求解器',
        'github.link': '在 GitHub 上查看 →',
        'github.quickstart': '快速开始',
        'github.copy': '复制',

        // Documentation Section
        'docs.title': '文档与资源',
        'docs.getting-started.title': '入门指南',
        'docs.getting-started.desc': '5 分钟内完成安装、配置和第一个优化问题。',
        'docs.api.title': 'API 参考',
        'docs.api.desc': '包含所有求解器方法和参数示例的完整 API 文档。',
        'docs.tutorials.title': '教程与示例',
        'docs.tutorials.desc': '常见优化场景和用例的分步教程。',
        'docs.performance.title': '性能调优',
        'docs.performance.desc': '优化技术、算法选择和性能基准测试。',
        'docs.migration.title': '迁移指南',
        'docs.migration.desc': '使用兼容性指南和代码示例从其他求解器迁移。',
        'docs.releases.title': '发布说明',
        'docs.releases.desc': '每个版本的最新功能、改进和重大变更。',

        // Trial Form Section
        'trial.title': '申请免费试用许可证',
        'trial.fullname': '姓名',
        'trial.email': '电子邮箱',
        'trial.company': '公司名称',
        'trial.jobtitle': '职位',
        'trial.usecase': '使用场景描述',
        'trial.usecase.placeholder': '描述您的优化问题和预期规模...',
        'trial.scale': '问题规模',
        'trial.scale.placeholder': '选择问题规模',
        'trial.scale.small': '小型（< 1,000 个变量）',
        'trial.scale.medium': '中型（1,000 - 100,000 个变量）',
        'trial.scale.large': '大型（100,000 - 1M 个变量）',
        'trial.scale.enterprise': '企业级（> 1M 个变量）',
        'trial.agree': '我同意',
        'trial.terms': '服务条款',
        'trial.and': '和',
        'trial.privacy': '隐私政策',
        'trial.submit': '申请试用许可证',
        'trial.submitting': '处理中...',

        // License Table
        'license.title': '许可证对比',
        'license.feature': '功能',
        'license.trial': '试用许可证',
        'license.full': '完整许可证',
        'license.duration': '期限',
        'license.duration.trial': '30 天',
        'license.duration.full': '年度/永久',
        'license.size': '问题规模',
        'license.size.trial': '最多 10 万个变量',
        'license.size.full': '无限制',
        'license.types': '求解器类型',
        'license.types.trial': 'LP、MIP、QP',
        'license.types.full': '所有类型 + 定制',
        'license.api': 'API 访问',
        'license.api.both': '完整 API',
        'license.parallel': '并行求解',
        'license.parallel.trial': '最多 4 个线程',
        'license.parallel.full': '无限线程',
        'license.cloud': '云部署',
        'license.cloud.trial': '受限',
        'license.cloud.full': '完全支持',
        'license.support': '支持',
        'license.support.trial': '邮件支持',
        'license.support.full': '7×24 优先支持',
        'license.custom': '定制算法',
        'license.custom.trial': '否',
        'license.custom.full': '可用',

        // Footer
        'footer.tagline': '企业级大规模优化',
        'footer.product': '产品',
        'footer.resources': '资源',
        'footer.legal': '法律',
        'footer.capabilities': '能力',
        'footer.github': 'GitHub',
        'footer.documentation': '文档',
        'footer.trial': '免费试用',
        'footer.support': '支持',
        'footer.contact': '联系我们',
        'footer.privacy': '隐私政策',
        'footer.terms': '服务条款',
        'footer.license': '许可协议',
        'footer.copyright': '© 2026 华为技术有限公司 版权所有',

        // Modal
        'modal.title': '试用申请已提交',
        'modal.message': '感谢您对 OptVerse Solver 的关注。我们的团队将审核您的申请，并在 24 小时内将试用许可证发送至',
        'modal.message2': '。',
        'modal.close': '关闭'
    }
};

class LanguageSwitcher {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectLanguage();
        this.init();
    }

    init() {
        this.createLanguageSwitcher();
        this.applyLanguage(this.currentLang);
        this.attachEventListeners();
    }

    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('zh') ? 'zh' : 'en';
    }

    getStoredLanguage() {
        return localStorage.getItem('optverse-language');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('optverse-language', lang);
    }

    createLanguageSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="lang-btn ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="lang-btn ${this.currentLang === 'zh' ? 'active' : ''}" data-lang="zh">中文</button>
        `;
        document.body.appendChild(switcher);
    }

    attachEventListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        if (lang === this.currentLang) return;

        this.currentLang = lang;
        this.setStoredLanguage(lang);
        this.applyLanguage(lang);

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    applyLanguage(lang) {
        const t = translations[lang];
        document.documentElement.lang = lang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.placeholder !== undefined) {
                        el.placeholder = t[key];
                    }
                } else {
                    el.textContent = t[key];
                }
            }
        });

        // Update elements with data-i18n-html (for elements with nested HTML)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.dataset.i18nHtml;
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });
    }
}

// Initialize language switcher when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new LanguageSwitcher();
    });
} else {
    new LanguageSwitcher();
}

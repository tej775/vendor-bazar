// Vendor Dashboard JavaScript

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
    initializeDashboard();
});

// Initialize Dashboard
function initializeDashboard() {
    // Show loading overlay initially
    showLoading();
    
    // Load static dashboard UI
    setTimeout(() => {
        loadStaticDashboard();
        hideLoading();
    }, 1500);
    
    // Set up event listeners
    setupEventListeners();
}

// Load Static Dashboard (UI only)
function loadStaticDashboard() {
    // Update vendor name with placeholder
    document.getElementById('vendorName').textContent = 'Vendor Dashboard';
    
    // Update stats with placeholder data
    updateStats({
        requests: '--',
        orders: '--',
        rating: '--',
        revenue: '--'
    });
    
    // Show placeholder message for activity
    loadPlaceholderActivity();
}

// Update Stats Cards (UI only)
function updateStats(stats) {
    // Update requests
    const requestsElement = document.getElementById('totalRequests');
    if (requestsElement) {
        requestsElement.textContent = stats.requests;
    }
    
    // Update orders
    const ordersElement = document.getElementById('totalOrders');
    if (ordersElement) {
        ordersElement.textContent = stats.orders;
    }
    
    // Update rating
    const ratingElement = document.getElementById('avgRating');
    if (ratingElement) {
        ratingElement.textContent = stats.rating;
    }
    
    // Update revenue
    const revenueElement = document.getElementById('totalRevenue');
    if (revenueElement) {
        revenueElement.textContent = stats.revenue;
    }
}

// Load Placeholder Activity
function loadPlaceholderActivity() {
    const activityContainer = document.querySelector('.activity-list');
    if (activityContainer) {
        activityContainer.innerHTML = `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fas fa-info-circle"></i>
                </div>
                <div class="activity-content">
                    <h4>Dashboard Ready</h4>
                    <p>Connect to backend to view real activity data</p>
                    <span class="activity-time">Now</span>
                </div>
            </div>
        `;
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const userMenu = document.querySelector('.user-menu');
        const dropdown = document.getElementById('userDropdown');
        
        if (!userMenu.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
}

// Toggle User Menu
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('show');
}

// Edit Profile
function editProfile() {
    showNotification('Profile editing feature coming soon!', 'info');
    toggleUserMenu();
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Show logout message
        showNotification('Logged out successfully!', 'success');
        
        // Redirect to signin page
        setTimeout(() => {
            window.location.href = 'signin.html';
        }, 1500);
    }
    toggleUserMenu();
}

// Quick Action Functions (UI placeholders)
function viewSuppliers() {
    showNotification('Suppliers view requires backend implementation', 'info');
}

function manageOrders() {
    showNotification('Order management requires backend implementation', 'info');
}

function viewAnalytics() {
    showNotification('Analytics view requires backend implementation', 'info');
}

// Handle Activity Actions (UI only)
function handleActivityAction(activityType) {
    showNotification(`${activityType} action requires backend implementation`, 'info');
}

// Loading Functions
function showLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.add('hidden');
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="closeNotification(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        min-width: 300px;
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        closeNotification(notification.querySelector('.notification-close'));
    }, 5000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'fas fa-check-circle';
        case 'error': return 'fas fa-exclamation-circle';
        case 'warning': return 'fas fa-exclamation-triangle';
        default: return 'fas fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return 'linear-gradient(135deg, #28a745, #20c997)';
        case 'error': return 'linear-gradient(135deg, #dc3545, #e74c3c)';
        case 'warning': return 'linear-gradient(135deg, #ffc107, #f39c12)';
        default: return 'linear-gradient(135deg, #667eea, #764ba2)';
    }
}

function closeNotification(closeBtn) {
    const notification = closeBtn.closest('.notification');
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// Refresh Dashboard Data (UI only)
function refreshDashboard() {
    showNotification('Dashboard refresh requires backend implementation', 'info');
}

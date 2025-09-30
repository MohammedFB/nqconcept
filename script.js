// Makeen 66 Project - Interactive JavaScript with AJAX

$(document).ready(function () {
    // Initialize the application
    initializeApp();

    // Bind event handlers
    bindEventHandlers();

    // Initialize animations
    initializeAnimations();
});

// Application initialization
function initializeApp() {
    // Hide loading spinner
    hideLoadingSpinner();

    // Add smooth scrolling
    $('html').css('scroll-behavior', 'smooth');

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add form validation
    initializeFormValidation();
}

// Bind all event handlers
// function bindEventHandlers() {
//     // Package details buttons
//     $(document).on('click', '.details-btn', function(e) {
//         e.preventDefault();
//         console.log('Details button clicked');
//         const packageType = $(this).data('package');
//         console.log('Package type:', packageType);
//         showPackageDetails(packageType);
//     });

//     // Close details button
//     $(document).on('click', '#closeDetails', function(e) {
//         e.preventDefault();
//         hidePackageDetails();
//     });

//     // Tab switching
//     $(document).on('click', '#productTabs button', function(e) {
//         e.preventDefault();
//         const target = $(this).attr('data-bs-target');
//         const packageType = getCurrentPackageType();
//         console.log('Tab clicked:', target, 'Package:', packageType);
//         loadTabContent(target, packageType);
//     });

//     // Form submission
//     $(document).on('click', '#submitForm', function(e) {
//         e.preventDefault();
//         handleFormSubmission();
//     });

//     // Input animations
//     $('.form-control').on('focus', function() {
//         $(this).parent().addClass('focused');
//     }).on('blur', function() {
//         if (!$(this).val()) {
//             $(this).parent().removeClass('focused');
//         }
//     });

//     // Package card hover effects
//     $('.package-card').on('mouseenter', function() {
//         $(this).addClass('hovered');
//     }).on('mouseleave', function() {
//         $(this).removeClass('hovered');
//     });
// }

// Initialize animations
function initializeAnimations() {
    // Animate elements on scroll
    $(window).on('scroll', function () {
        animateOnScroll();
    });

    // Initial animation trigger
    animateOnScroll();

    // Add entrance animations
    $('.card').each(function (index) {
        $(this).css('animation-delay', (index * 0.1) + 's');
        $(this).addClass('slide-up');
    });
}



// Load tab content via AJAX
function loadTabContent(target, packageType) {
    const contentDiv = target.replace('#', '') + 'Content';
    const $contentDiv = $('#' + contentDiv);

    // Show loading in tab
    $contentDiv.html('<div class="text-center py-5"><div class="spinner-border text-primary" role="status"></div></div>');

    // Simulate AJAX call
    setTimeout(function () {
        let content = '';

        switch (target) {
            case '#doors':
                content = generateDoorsContent(packageType);
                break;
            case '#windows':
                content = generateWindowsContent(packageType);
                break;
            case '#smart-home':
                content = generateSmartHomeContent(packageType);
                break;
        }

        $contentDiv.html(content);

        // Add animations to new content
        $contentDiv.find('.fade-in').each(function (index) {
            $(this).css('animation-delay', (index * 0.1) + 's');
        });

        // Initialize image gallery
        initializeImageGallery();

    }, 500);
}

// Generate doors content

// Generate windows content



// Get package details data
function getPackageDetailsData(packageType) {
    const data = {
        platinum: {
            title: 'باقة البلاتينيوم',
            price: '80,600 ريال سعودي'
        },
        premium: {
            title: 'باقة البريميوم',
            price: '105,350 ريال سعودي'
        }
    };

    return data[packageType];
}

// Get doors data
function getDoorsData(packageType) {
    const data = {
        platinum: {
            specs: [
                { name: 'سماكة الباب', value: '4.5 سم' },
                { name: 'نوع الباب', value: 'فلات' },
                { name: 'نوع القفل', value: 'مغناطيسي' },
                { name: 'المادة', value: 'WPC عالي الجودة' }
            ],
            note: 'الأبواب مصنوعة من مواد عالية الجودة ومقاومة للرطوبة والحشرات'
        },
        premium: {
            specs: [
                { name: 'سماكة الباب', value: '6.0 سم' },
                { name: 'نوع الباب', value: 'Assembly بعدة تصاميم' },
                { name: 'نوع القفل', value: 'مغناطيسي' },
                { name: 'الحشوة', value: 'عزل حراري' },
                { name: 'المسكات', value: 'حصرية عالية الجودة' }
            ],
            note: 'أبواب بريميوم مع عزل حراري ومسكات حصرية وتصاميم متعددة'
        }
    };

    return data[packageType];
}

// Get windows data
function getWindowsData(packageType) {
    const data = {
        platinum: {
            specs: [
                { name: 'نوع القطاع', value: 'T5 Aluminum-6063 alloy' },
                { name: 'سماكة القطاع', value: '1.8 مم' },
                { name: 'مواصفات الزجاج', value: '5+12+5 GLASS' },
                { name: 'العازل الحراري', value: 'مدموج مع E-LOW' },
                { name: 'الطلاء', value: 'Gray powder coated' },
                { name: 'المفصلات', value: 'صينية درجة أولى' }
            ],
            warranty: '15 سنة ضمان على النوافذ'
        },
        premium: {
            specs: [
                { name: 'نوع القطاع', value: 'T5 Aluminum-6063 alloy' },
                { name: 'سماكة القطاع', value: '2.0 مم' },
                { name: 'مواصفات الزجاج', value: '6+12+6 GLASS' },
                { name: 'العازل الحراري', value: 'مدموج مع E-LOW' },
                { name: 'نظام العزل', value: 'thermal break' },
                { name: 'الطلاء', value: 'Gray powder coated' },
                { name: 'المفصلات', value: 'إيطالية وصينية درجة أولى' },
                { name: 'عزل الصوت', value: 'تقليل الضوضاء' }
            ],
            warranty: '25 سنة ضمان على النوافذ'
        }
    };

    return data[packageType];
}

// Get smart home data
function getSmartHomeData(packageType) {
    const data = {
        platinum: {
            features: [
                { name: 'التحكم بالإضاءة', description: 'تحكم ذكي كامل بجميع الأضواء' },
                { name: 'التحكم بالباب الرئيسي', description: 'فتح وإغلاق الباب عن بُعد' },
                { name: 'التحكم عبر الجوال', description: 'تطبيق ذكي للتحكم الكامل' },
                { name: 'الاتصال بالواي فاي', description: 'اتصال مستقر وآمن' }
            ],
            systems: ['Smart Wifi System']
        },
        premium: {
            features: [
                { name: 'التحكم الشامل', description: 'إضاءة، تكييف، ستائر' },
                { name: 'التحكم عبر الجوال', description: 'تطبيق ذكي متقدم' },
                { name: 'التوافق مع اليكسا', description: 'تحكم صوتي بالأوامر العربية' },
                { name: 'التوافق مع أبل هوم', description: 'تكامل مع نظام أبل البيئي' }
            ],
            systems: ['Zigbee (Wireless) Home Automation System', 'Smart Wifi System']
        }
    };

    return data[packageType];
}

// Get current package type
function getCurrentPackageType() {
    return $('#detailsSection').data('package-type') || 'platinum';
}

// Initialize image gallery
function initializeImageGallery() {
    $('.product-image').on('click', function () {
        const imageSrc = $(this).attr('src');
        const imageAlt = $(this).attr('alt');

        // Create modal if it doesn't exist
        if ($('#imageModal').length === 0) {
            $('body').append(`
                <div class="modal fade" id="imageModal" tabindex="-1">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="imageModalLabel"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body text-center">
                                <img src="" alt="" class="img-fluid" id="modalImage">
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }

        // Update modal content
        $('#imageModalLabel').text(imageAlt);
        $('#modalImage').attr('src', imageSrc).attr('alt', imageAlt);

        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    });
}

// Form validation
function initializeFormValidation() {
    // Real-time validation
    $('#fullName').on('input', function () {
        validateField($(this), 'يرجى إدخال الاسم الثلاثي');
    });

    $('#nationalId').on('input', function () {
        validateField($(this), 'يرجى إدخال رقم الهوية أو الإقامة');
    });

    $('#email').on('input', function () {
        if ($(this).val()) {
            validateEmail($(this));
        }
    });
}

// Validate individual field
function validateField($field, message) {
    const value = $field.val().trim();
    const $feedback = $field.siblings('.invalid-feedback');

    if (!value) {
        $field.addClass('is-invalid');
        if ($feedback.length === 0) {
            $field.after(`<div class="invalid-feedback">${message}</div>`);
        }
        return false;
    } else {
        $field.removeClass('is-invalid').addClass('is-valid');
        $feedback.remove();
        return true;
    }
}

// Validate email
function validateEmail($field) {
    const email = $field.val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const $feedback = $field.siblings('.invalid-feedback');

    if (email && !emailRegex.test(email)) {
        $field.addClass('is-invalid');
        if ($feedback.length === 0) {
            $field.after('<div class="invalid-feedback">يرجى إدخال بريد إلكتروني صحيح</div>');
        }
        return false;
    } else {
        $field.removeClass('is-invalid');
        if (email) $field.addClass('is-valid');
        $feedback.remove();
        return true;
    }
}

// Handle form submission
function handleFormSubmission() {
    const fullName = $('#fullName').val().trim();
    const nationalId = $('#nationalId').val().trim();
    const email = $('#email').val().trim();
    const agreeTerms = $('#agreeTerms').is(':checked');

    // Validate required fields
    let isValid = true;
    isValid = validateField($('#fullName'), 'يرجى إدخال الاسم الثلاثي') && isValid;
    isValid = validateField($('#nationalId'), 'يرجى إدخال رقم الهوية أو الإقامة') && isValid;

    if (email) {
        isValid = validateEmail($('#email')) && isValid;
    }

    if (!agreeTerms) {
        showAlert('يرجى الموافقة على الشروط والأحكام', 'warning');
        return;
    }

    if (!isValid) {
        showAlert('يرجى تصحيح الأخطاء في النموذج', 'danger');
        return;
    }

    // Show loading
    showLoadingSpinner();

    // Simulate AJAX form submission
    setTimeout(function () {
        // Simulate successful submission
        hideLoadingSpinner();

        // Show success message
        showAlert('تم إرسال طلبكم بنجاح! سيتم التواصل معكم قريباً.', 'success');

        // Reset form
        $('#userForm')[0].reset();
        $('#agreeTerms').prop('checked', false);
        $('#email').val('');
        $('.form-control').removeClass('is-valid is-invalid');

        // Send email if provided
        if (email) {
            setTimeout(function () {
                showAlert('تم إرسال نسخة من العقد إلى بريدكم الإلكتروني', 'info');
            }, 2000);
        }

    }, 2000);
}

// Show alert message
function showAlert(message, type) {
    const alertHtml = `
        <div class="alert alert-${type} alert-dismissible fade show position-fixed" 
             style="top: 20px; right: 20px; z-index: 10000; min-width: 300px;" role="alert">
            <i class="fas fa-${getAlertIcon(type)} me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

    $('body').append(alertHtml);

    // Auto-dismiss after 5 seconds
    setTimeout(function () {
        $('.alert').alert('close');
    }, 5000);
}

// Get alert icon
function getAlertIcon(type) {
    const icons = {
        success: 'check-circle',
        danger: 'exclamation-triangle',
        warning: 'exclamation-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Show/hide loading spinner
function showLoadingSpinner() {
    $('#loadingSpinner').fadeIn(300);
}

function hideLoadingSpinner() {
    $('#loadingSpinner').fadeOut(300);
}

// Animate elements on scroll
function animateOnScroll() {
    $('.card, .feature-item').each(function () {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).addClass('fade-in');
        }
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    $('html, body').animate({
        scrollTop: $(sectionId).offset().top - 100
    }, 800);
}

// Initialize particle background (optional enhancement)
function initializeParticleBackground() {
    // This would initialize a particle.js background if desired
    // For now, we'll keep it simple with CSS gradients
}

// Handle responsive behavior
$(window).on('resize', function () {
    // Adjust layouts for different screen sizes
    if ($(window).width() < 768) {
        // Mobile adjustments
        $('.package-card').removeClass('h-100');
    } else {
        // Desktop adjustments
        $('.package-card').addClass('h-100');
    }
});

// Keyboard navigation support
$(document).on('keydown', function (e) {
    // ESC key to close details
    if (e.key === 'Escape' && $('#detailsSection').is(':visible')) {
        hidePackageDetails();
    }
});

// Print functionality
function printPage() {
    window.print();
}

// Export data functionality (for future enhancement)
function exportData() {
    const data = {
        fullName: $('#fullName').val(),
        nationalId: $('#nationalId').val(),
        email: $('#email').val(),
        timestamp: new Date().toISOString()
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'makeen-66-data.json';
    link.click();

    URL.revokeObjectURL(url);
}

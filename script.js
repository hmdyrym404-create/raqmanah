let selectedDesign = "كلاسيكي";


// اختيار التصميم

function chooseDesign(design) {

    selectedDesign = design;

    const designText =
        document.getElementById("selectedDesign");

    if (designText) {
        designText.textContent =
            "التصميم المختار: " + design;
    }

    const buttons =
        document.querySelectorAll(".design-options button");

    buttons.forEach(function(button) {

        button.classList.remove("selected");

        if (button.textContent.trim() === design) {
            button.classList.add("selected");
        }

    });

}


// إنشاء الموقع والانتقال للصفحة الثانية

function createWebsite() {

    const businessNameElement =
        document.getElementById("businessName");

    const businessTypeElement =
        document.getElementById("businessType");


    if (!businessNameElement || !businessTypeElement) {
        return;
    }


    const businessName =
        businessNameElement.value.trim();

    const businessType =
        businessTypeElement.value;


    if (businessName === "") {

        alert("فضلاً اكتب اسم المشروع.");

        businessNameElement.focus();

        return;
    }


    if (businessType === "") {

        alert("فضلاً اختر نوع المشروع.");

        businessTypeElement.focus();

        return;
    }


    // حفظ بيانات العميل

    localStorage.setItem(
        "businessName",
        businessName
    );

    localStorage.setItem(
        "businessType",
        businessType
    );

    localStorage.setItem(
        "selectedDesign",
        selectedDesign
    );


    // الانتقال إلى صفحة المعاينة

    window.location.href = "preview.html";

}


// تحميل بيانات العميل في صفحة المعاينة

function loadPreview() {

    const businessName =
        localStorage.getItem("businessName");

    const businessType =
        localStorage.getItem("businessType");

    const design =
        localStorage.getItem("selectedDesign");


    if (!businessName) {
        return;
    }


    const previewLogo =
        document.getElementById("previewLogo");

    const previewTitle =
        document.getElementById("previewTitle");

    const previewText =
        document.getElementById("previewText");

    const previewFooter =
        document.getElementById("previewFooter");


    if (previewLogo) {

        previewLogo.textContent =
            businessName;

    }


    if (previewTitle) {

        previewTitle.textContent =
            "مرحبًا بك في " + businessName;

    }


    if (previewText) {

        previewText.textContent =
            "موقع إلكتروني احترافي لـ " +
            businessType +
            " بتصميم " +
            design +
            " تم إنشاؤه بواسطة منصة رقمنه.";

    }


    if (previewFooter) {

        previewFooter.textContent =
            businessName;

    }

}


// نموذج التواصل

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            alert(
                "شكرًا لك " +
                name +
                " تم استلام طلبك بنجاح، وسنتواصل معك قريبًا."
            );

            contactForm.reset();

        }
    );

}


// تشغيل تحميل المعاينة

loadPreview();
function choosePackage(packageName, price) {

    localStorage.setItem("packageName", packageName);
    localStorage.setItem("packagePrice", price);

    window.location.href = "package.html";
}

function loadPackage() {

    const packageName = localStorage.getItem("packageName");
    const packagePrice = localStorage.getItem("packagePrice");

    const selectedPackage =
        document.getElementById("selectedPackage");

    const selectedPrice =
        document.getElementById("selectedPrice");

    if (selectedPackage && packageName) {

        selectedPackage.textContent =
            "الباقة المختارة: " + packageName;

    }

    if (selectedPrice && packagePrice) {

        selectedPrice.textContent =
            "السعر: " + packagePrice + " ريال";

    }
}




loadPackage();

function sendPackageRequest() {

    const name = document.getElementById("customerName");
    const phone = document.getElementById("customerPhone");
    const project = document.getElementById("projectName");

    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const projectError = document.getElementById("projectError");
    const successMessage = document.getElementById("successMessage");

    // تنظيف الرسائل السابقة
    nameError.textContent = "";
    phoneError.textContent = "";
    projectError.textContent = "";
    successMessage.textContent = "";

    name.classList.remove("input-error");
    phone.classList.remove("input-error");
    project.classList.remove("input-error");

    let valid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "⚠ فضلاً أدخل اسمك";
        name.classList.add("input-error");
        valid = false;
    }

    if (phone.value.trim() === "") {
        phoneError.textContent = "⚠ فضلاً أدخل رقم الجوال";
        phone.classList.add("input-error");
        valid = false;
    }

    if (project.value.trim() === "") {
        projectError.textContent = "⚠ فضلاً أدخل اسم المشروع";
        project.classList.add("input-error");
        valid = false;
    }

    if (!valid) {
        return;
    }

    successMessage.textContent = "✓ تم إرسال طلبك بنجاح، سنتواصل معك قريبًا.";
}
function loadPackage() {

    const packageName =
        localStorage.getItem("packageName");

    const packagePrice =
        localStorage.getItem("packagePrice");


    const selectedPackage =
        document.getElementById("selectedPackage");

    const selectedPrice =
        document.getElementById("selectedPrice");


    if (selectedPackage && packageName) {

        selectedPackage.textContent =
            "الباقة المختارة: " + packageName;

    }


    if (selectedPrice && packagePrice) {

        selectedPrice.textContent =
            "السعر: " + packagePrice + " ريال";

    }
}

function sendPackageRequest() {

    const name =
        document.getElementById("customerName");

    const phone =
        document.getElementById("customerPhone");

    const project =
        document.getElementById("projectName");


    const nameError =
        document.getElementById("nameError");

    const phoneError =
        document.getElementById("phoneError");

    const projectError =
        document.getElementById("projectError");

    const successMessage =
        document.getElementById("successMessage");


    // مسح التنبيهات السابقة
    nameError.textContent = "";
    phoneError.textContent = "";
    projectError.textContent = "";
    successMessage.textContent = "";


    name.classList.remove("input-error");
    phone.classList.remove("input-error");
    project.classList.remove("input-error");


    let valid = true;


    if (name.value.trim() === "") {

        nameError.textContent =
            "⚠ فضلاً أدخل اسمك";

        name.classList.add("input-error");

        valid = false;
    }


    if (phone.value.trim() === "") {

        phoneError.textContent =
            "⚠ فضلاً أدخل رقم الجوال";

        phone.classList.add("input-error");

        valid = false;
    }


    if (project.value.trim() === "") {

        projectError.textContent =
            "⚠ فضلاً أدخل اسم المشروع";

        project.classList.add("input-error");

        valid = false;
    }


    if (!valid) {
        return;
    }


    const packageName =
        localStorage.getItem("packageName");

    const packagePrice =
        localStorage.getItem("packagePrice");


    successMessage.textContent =
        "✓ تم إرسال طلبك بنجاح! " +
        "الباقة: " + packageName +
        " | السعر: " + packagePrice + " ريال";
}


// تشغيل بيانات الباقة عند فتح الصفحة
loadPackage();

function continuePackage() {

    const selected =
        document.querySelector('input[name="package"]:checked');

    const error =
        document.getElementById("packageError");

    if (!selected) {
        error.textContent = "⚠ فضلاً اختر إحدى الباقات أولاً";
        return;
    }

    error.textContent = "";

    const packageName = selected.value;
    const packagePrice = selected.dataset.price;

    localStorage.setItem("packageName", packageName);
    localStorage.setItem("packagePrice", packagePrice);

    window.location.href = "package.html";
}
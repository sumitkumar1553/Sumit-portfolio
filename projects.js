// Project image slider

const projectData = {

    nhai: {
        imageId: "nhaiImage",
        counterId: "nhaiCounter",
        currentIndex: 0,
        altText: "NHAI Infrastructure & Operations Analytics Dashboard",
        images: [
            "Images/NHAI_Infrastructure_&_Operations_Analytics_Dashboard/Project_Overview (1).png",
            "Images/NHAI_Infrastructure_&_Operations_Analytics_Dashboard/Toll_&_FASTag_Analytics (2).png",
            "Images/NHAI_Infrastructure_&_Operations_Analytics_Dashboard/Traffic_Analytics (3).png",
            "Images/NHAI_Infrastructure_&_Operations_Analytics_Dashboard/Safety_Analytics (4).png",
            "Images/NHAI_Infrastructure_&_Operations_Analytics_Dashboard/Amenities_&_Employee_Performance (5).png"
       ]
    },


    hospital: {
        imageId: "hospitalImage",
        counterId: "hospitalCounter",
        currentIndex: 0,
        altText: "Hospital Dashboard",
        images: [
            "Images/Hospital_Analysis_Projects/Home_Dashboard (1).png",
            "Images/Hospital_Analysis_Projects/Overview_Dashboard (2).png",
            "Images/Hospital_Analysis_Projects/Patient_Dashboard (3).png",
            "Images/Hospital_Analysis_Projects/Doctor_Dashboard (4).png",
            "Images/Hospital_Analysis_Projects/Information_Dashboard (5).png",
            "Images/Hospital_Analysis_Projects/Finance_Dashboard (6).png"
        ]
    },

    samsung: {
        imageId: "samsungImage",
        counterId: "samsungCounter",
        currentIndex: 0,
        altText: "Samsung Dashboard",
        images: [
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Home_Dashboard (1).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/OverView_Dashboard (2).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Supplier_Dashboard (3).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Inventory_Dashboard (4).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Shipment_Dashboard (5).png",
            "Images/Samsung_Supply_Chain_&_Logistics_Projects/Customer_Dashboard (6).png"
        ]
    },

    zomato: {
        imageId: "zomatoImage",
        counterId: "zomatoCounter",
        currentIndex: 0,
        altText: "Zomato Dashboard",
        images: [
            "Images/zomato_sales_Projects/Overview_Dashboard (1).png",
            "Images/zomato_sales_Projects/User_Performance_Dashboard (2).png",
            "Images/zomato_sales_Projects/City_Performance_Dashboard (3).png"
        ]
    },

    superstore: {
        imageId: "superstoreImage",
        counterId: "superstoreCounter",
        currentIndex: 0,
        altText: "Super Store Dashboard",
        images: [
            "Images/Super_Sales_store_Projects/Super_Store_Sales_Dashboard (1).png",
            "Images/Super_Sales_store_Projects/Super_Store_Sales_Forecast_Dashboard (2).png"
        ]
    }
};

function updateButtons(projectName) {
    const project = projectData[projectName];

    if (!project) {
        return;
    }

    const prevBtn = document.querySelector(
        `.slider-btn[data-project="${projectName}"][data-action="prev"]`
    );

    const nextBtn = document.querySelector(
        `.slider-btn[data-project="${projectName}"][data-action="next"]`
    );

    if (!prevBtn || !nextBtn) {
        return;
    }

    prevBtn.disabled = project.currentIndex === 0;
    nextBtn.disabled = project.currentIndex === project.images.length - 1;
}

function showImage(projectName) {
    const project = projectData[projectName];

    if (!project) {
        return;
    }

    const image = document.getElementById(project.imageId);
    const counter = document.getElementById(project.counterId);

    if (!image || !counter) {
        return;
    }

    image.src = project.images[project.currentIndex];
    image.alt = `${project.altText} ${project.currentIndex + 1}`;
    counter.innerText = `${project.currentIndex + 1} of ${project.images.length}`;

    updateButtons(projectName);
}

function nextImage(projectName) {
    const project = projectData[projectName];

    if (!project) {
        return;
    }

    if (project.currentIndex < project.images.length - 1) {
        project.currentIndex++;
        showImage(projectName);
    }
}

function prevImage(projectName) {
    const project = projectData[projectName];

    if (!project) {
        return;
    }

    if (project.currentIndex > 0) {
        project.currentIndex--;
        showImage(projectName);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    Object.keys(projectData).forEach(function (projectName) {
        showImage(projectName);
    });

    const buttons = document.querySelectorAll(".slider-btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const projectName = button.getAttribute("data-project");
            const action = button.getAttribute("data-action");

            if (action === "next") {
                nextImage(projectName);
            }

            if (action === "prev") {
                prevImage(projectName);
            }
        });
    });
});
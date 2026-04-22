import { bearingProducts, linearAutomationProducts, powerTransmissionProducts, accessoriesProducts } from "./bearingdata.js";

export const searchIndex = [
    // Static Pages
    {
        title: "About Us",
        path: "/aboutus",
        content: "Overseas Bearing Agency is a trusted supplier of high-quality bearings and precision motion components. Specialists in precision spindles, bearings, ball screws, rotary tables, and comprehensive reconditioning services with 25 years of experience. We serve diverse industrial sectors with reliable and performance-driven solutions across manufacturing, automation, and heavy industry. Our pan-India locations include Bangalore (Southern India) and a regional office in Northern India."
    },
    {
        title: "Services",
        path: "/services",
        content: "We provide precision repair and reconditioning services for spindles, ball screws, rotary tables, and bearings. Our core services include Bearing Selection & Technical Consultation, Custom Bearing Design & Manufacturing, and Bearing Maintenance & Repair (Levels 1, 2, and 3: Inspection, Refurbishment, and Full Remanufacturing). Technical services include Lubrication Management, Training Services, and Condition Monitoring for predictive maintenance."
    },
    {
        title: "Home",
        path: "/",
        content: "Welcome to Overseas Bearing Agency. We are industry leaders in providing premium precision bearings, linear automation, and power transmission solutions. Explore our comprehensive product catalog or contact our experts for technical support."
    },
    {
        title: "Products",
        path: "/products",
        content: "Browse our extensive catalog of industrial solutions including Bearings, Linear Automation components, Power Transmission units, and Accessories. We carry brands like SKF, TIMKEN, INA (Schaeffler Group), NSK, NACHI, and ROLLWAY."
    },
    {
        title: "Enquiry",
        path: "/enquiry",
        content: "Contact us for enquiries, technical support, or project consultations. Reach out to our Bangalore corporate office at +91-80-23253148 or email sales@overseasbearing.com."
    },

    // Bearings
    ...bearingProducts.map(p => ({
        title: p.productName,
        path: `/bearing/${p.id}`,
        content: `${p.description} Key features include: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    })),

    // Linear Automation
    ...linearAutomationProducts.map(p => ({
        title: p.productName,
        path: `/linear-automation/${p.id}`,
        content: `${p.description} Key features: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    })),

    // Power Transmission
    ...powerTransmissionProducts.map(p => ({
        title: p.productName,
        path: `/power-transmission/${p.id}`,
        content: `${p.description} Key features: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    })),

    // Accessories
    ...accessoriesProducts.map(p => ({
        title: p.productName,
        path: `/accessories/${p.id}`,
        content: `${p.description} Key features: ${p.keyFeatures.join(", ")}. Applications: ${p.applications.join(", ")}.`
    }))
];

function calculateWorkDurations() {
    const jobs = [
        { company: "Auren", startDate: new Date(2020, 4, 1), endDate: new Date(2023, 2, 1) }, // May 2020 to March 2023
        { company: "Calyx", startDate: new Date(2023, 2, 1), endDate: new Date() } // March 2023 to present
    ];

    jobs.forEach(job => {
        let years = job.endDate.getFullYear() - job.startDate.getFullYear();
        let months = job.endDate.getMonth() - job.startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        const duration = `${years} years and ${months} months`;

        // Find element using XPath
        const xpath = `//*[contains(text(), '${job.company}')]`;
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const element = result.singleNodeValue;

        if (element) {
            element.innerText = `${job.company}: ${duration}`;
        }
    });
}

window.onload = calculateWorkDurations;
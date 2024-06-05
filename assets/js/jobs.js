function calculateWorkDurations() {
    const jobs = [
        { company: "Auren Argentina", startDate: new Date(2022, 8, 1), endDate: new Date(2023, 2, 1) }, // August 2022 to February 2023
        { company: "Calyx Servicios S.A", startDate: new Date(2023, 2, 1), endDate: new Date() } // March 2023 to present
    ];

    jobs.forEach(job => {
        let years = job.endDate.getFullYear() - job.startDate.getFullYear();
        let months = job.endDate.getMonth() - job.startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        let duration;
        if (years > 0) {
            duration = `${years} years and ${months+1} months`;
        } else {
            duration = `${months+1} months`;
        }

        const xpath = `//p[contains(text(), '${job.company}')]/following-sibling::span[@class='content-date']`;
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        const dateElement = result.singleNodeValue;

        if (dateElement) {
            const durationText = document.createElement("span");
            durationText.style.display = "block";
            durationText.style.textAlign = "left"; 
        
            const image = document.createElement("img");
            image.src = "/assets/img/dev.png";
            image.alt = "Duration icon";
            image.style.marginRight = "5px"; 
            durationText.appendChild(image);
        
            const textNode = document.createTextNode(` ${duration}`);
            durationText.appendChild(textNode);
        
            dateElement.appendChild(document.createElement("br"));
            dateElement.appendChild(durationText);
        }
        
    });
}

window.onload = calculateWorkDurations;

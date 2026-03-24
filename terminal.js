const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

const commands = {
    help: `
Available Commands:
about
skills
experience
projects
clear
`,

    about: `
AYUSH UPADHYAY
Python | Cyber Security | AI | Networking | IT Support
Detail-oriented IT professional with a strong foundation in Python programming, cybersecurity fundamentals, and technical support. Skilled in problem-solving, incident management, and network troubleshooting, with hands-on experience in data analysis and automation.
`,

    skills: `
Programming, Data & Automation: Python (Problem Solving, DSA, Data Handling, OOPs, Flask, Pandas, NumPy, NLP Basics – NLTK, TextBlob), Automation (Log Parsing, Alert Filtering), Bash Scripting, C (Basics)
Operating Systems & IT Support: Windows, Linux (Ubuntu, Kali), Troubleshooting, Technical Support, SDLC
Networking & Security Fundamentals: TCP/IP, OSI Model, DNS, DHCP, IP Addressing, Network Troubleshooting, CIA Triad, Threats, Vulnerability Management, IT Security Best Practices
SIEM, Tools & Security Operations: Microsoft Sentinel (SIEM), Log Analysis, Incident Investigation, Threat Detection, Wireshark, Nmap
Incident Management & Documentation: Jira (Ticketing, SLA, Escalation), Incident Response Lifecycle, Root Cause Analysis, MS Excel Reporting, SOP, Communication & CSAT
`,

    experience: `
Multiplier Brand Solutions Private Limited – Kaushambi, Uttar Pradesh
Customer Service Associate
September 2025 – February 2026			(6 Months)
1.	Delivered voice and chat-based technical support by diagnosing customer issues and providing structured step-by-step solutions, improving resolution efficiency. 
2.	Resolved basic software, system, and service-related issues while maintaining detailed logs using ticketing/support tools. 
3.	Ensured SLA adherence by prioritizing incidents, managing escalations, and following up until complete resolution.

Anayara Security and Manpower Services - Prayagraj, Uttar Pradesh
Back Office Associate (Clerk) 
March 2023 – September 2023			(7 Months)
1.	Managed operational datasets using MS Excel, including data entry, validation, and report generation for business tracking. 
2.	Monitored SLA timelines and ensured timely task completion through effective prioritization and coordination. 
3.	Maintained accurate documentation and followed SOPs to streamline internal processes and workflow efficiency.

Eisystems Services – Ghaziabad, Uttar Pradesh
DA&ML Intern
November 2020 – December 2020			(2 Months)		
1.	Built a Twitter Sentiment Analysis project using Python and NLP libraries (NLTK, TextBlob) to classify real-time tweet sentiments. 
2.	Performed data cleaning and preprocessing on unstructured datasets using Pandas, regex, and tokenization techniques. 
3.	Created data visualizations using Matplotlib and Seaborn to present insights and trends for decision-making.
`,

    projects: `
•	Twitter Sentiment Analysis: Implemented NLP-based sentiment classification using TextBlob and NLTK to analyze tweet polarity, preprocess unstructured text, and visualize sentiment trends.
•	Crime Analysis using Tableau: Created interactive Tableau dashboards to analyze crime datasets, identifying regional crime patterns, trend variations, and category-based incident distributions.
•	Sales Analysis using Python: Performed exploratory data analysis (EDA) using Pandas and Matplotlib to identify revenue trends, customer behavior patterns, and key performance metrics from structured sales data.
`
};

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const cmd = input.value.trim().toLowerCase();
        terminal.innerHTML += `> ${cmd}\n`;

        if (cmd === "clear") {
            terminal.innerHTML = "";
        } else if (commands[cmd]) {
            terminal.innerHTML += commands[cmd] + "\n";
        } else {
            terminal.innerHTML += "Command not found. Type 'help'.\n";
        }

        input.value = "";
    }
});

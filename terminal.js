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
Ayush Upadhyay
Cyber Security Analyst
Specialized in SIEM, Threat Detection and Security Automation.
`,

    skills: `
SIEM: Microsoft Sentinel, KQL
Network: Wireshark, Nmap, TCP/IP
Automation: Python
Forensics: Autopsy, Ghidra
OS: Ubuntu, Kali Linux
`,

    experience: `
Cyber Security Analyst 
- Security monitoring using Microsoft Sentinel
- KQL threat detection queries
- Network traffic investigation
- Python automation for log analysis
`,

    projects: `
- Advanced Packet Sniffer & ARP Detector
- Phishing Website Detector
- Basic Antivirus Simulation
- Twitter Sentiment Analysis
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

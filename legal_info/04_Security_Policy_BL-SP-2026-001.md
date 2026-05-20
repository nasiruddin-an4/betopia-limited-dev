# Betopia Limited & Betopia Group — Information Security Policy
**Document Reference:** BL-SP-2026-001 | **Version:** 1.0 | **Effective:** 11 May 2026 | **Classification:** PUBLIC | **Next Review:** 11 May 2027

> **Certifications:** ISO 22301:2019 (QRO) · ISO 9001:2015 (QRO) · ISO 27001 Aligned

---

## 1. Policy Statement

Betopia Limited is committed to protecting the confidentiality, integrity, and availability (CIA) of all information assets entrusted to us by clients, partners, employees, and stakeholders. Information security is a strategic priority embedded across all 22+ Strategic Business Units (SBUs) of Betopia Group, operating across 80+ countries with 5,000+ professionals.

**Formal Certifications (issued by QRO):**
- **ISO 22301:2019** — Business Continuity Management System (BCMS) — Full organisational scope
- **ISO 9001:2015** — Quality Management System (QMS) — Full organisational scope

Our ISMS is designed and operated in alignment with **ISO/IEC 27001:2022** controls and best practices.

---

## 2. Scope

This policy applies to:
- All Betopia employees, contractors, consultants, interns, and temporary staff
- All information systems, networks, applications, databases, and digital assets owned or operated by Betopia
- All third-party suppliers, sub-processors, and partners who access Betopia systems or process Betopia data
- Physical premises including registered office in Dhaka and any branch or co-working locations

---

## 3. Information Security Objectives

| Objective | Definition | Key Controls |
|---|---|---|
| Confidentiality | Ensure information is accessible only to authorised individuals | RBAC, MFA, encryption, NDA, data classification |
| Integrity | Safeguard accuracy and completeness of information | Checksums, audit logs, change management, code reviews |
| Availability | Ensure authorised users can access information when required | Redundancy, BCP (ISO 22301), SLA monitoring, disaster recovery |

---

## 4. Data Classification

| Classification | Definition | Examples | Handling |
|---|---|---|---|
| Public | Approved for public release | Website content, press releases | No restrictions |
| Internal | For internal Betopia Group use | Internal memos, operational procedures | Not shared externally without approval |
| Confidential | Sensitive business information | Client contracts, financial data, HR records | Encrypted; restricted access; NDA required |
| Restricted | Highest sensitivity | Encryption keys, credentials, client PII, source code | Strict need-to-know; MFA required; audit logs mandatory |

---

## 5. Access Control and Identity Management

### 5.1 Principles
- **Least Privilege** — minimum access rights required for each role
- **Need-to-Know** — Confidential/Restricted data requires documented business need
- **Segregation of Duties** — critical functions divided among multiple individuals
- **Zero Trust** — identity verification required regardless of network location

### 5.2 Authentication
- MFA mandatory for all administrative, cloud platform, and remote access
- Password minimum: 12 characters, mixed case, numbers, and special characters
- Sharing of credentials strictly prohibited
- Privileged access accounts subject to Privileged Access Management (PAM) controls

### 5.3 Access Reviews
- User access rights reviewed quarterly
- Access revoked within 24 hours of employee/contractor departure
- Restricted system access logs reviewed monthly for anomalies

---

## 6. Cryptography and Encryption

| Data State | Minimum Standard | Application |
|---|---|---|
| Data in transit | TLS 1.2 minimum (TLS 1.3 preferred) | All HTTPS traffic, API communications, email |
| Data at rest (servers) | AES-256 | All databases, cloud storage, backups |
| Data at rest (endpoints) | AES-256 full-disk encryption | All company laptops and mobile devices |
| Key management | Dedicated KMS | No hard-coded keys; annual rotation minimum |

---

## 7. Network and Infrastructure Security

### 7.1 Network Controls
- Web Application Firewall (WAF) and DDoS mitigation on all production environments
- Network segmentation (production / development / corporate VLANs separated)
- Intrusion Detection Systems (IDS) monitoring
- Remote access via VPN with MFA only; direct RDP/SSH from internet prohibited

### 7.2 Cloud Security
- Cloud resources configured with least privilege; public access disabled by default
- Cloud Security Posture Management (CSPM) continuous monitoring
- Data stored in regions consistent with GDPR and UK GDPR data residency requirements

### 7.3 Vulnerability Management
- Automated vulnerability scanning monthly on all internet-facing systems
- Manual penetration testing annually by qualified third-party testers
- Critical/high vulnerabilities: remediated within 72 hours
- Medium: within 30 days | Low: within 90 days
- Responsible disclosure programme: betopiagroup.com/security

---

## 8. Endpoint and Device Security

- All company devices enrolled in Mobile Device Management (MDM) with full-disk encryption
- Endpoint Detection and Response (EDR) software on all company devices
- Automatic OS and application updates enforced
- BYOD requires MDM enrolment and policy compliance
- Lost/stolen devices remotely wiped within 4 hours of report
- USB and removable media restricted on production systems

---

## 9. Physical and Environmental Security

- Electronic access control to office and data processing facilities; visitor logs maintained
- Clear desk and clear screen policies enforced
- Printing of Confidential/Restricted data requires justification; documents securely shredded after use
- Environmental controls (UPS, fire suppression, temperature monitoring) maintained at primary locations

---

## 10. Third-Party and Supplier Security

- All suppliers accessing Betopia data complete a security assessment prior to engagement
- Data Processing Agreements (DPAs) executed with all sub-processors (GDPR Article 28)
- Supplier security reviewed annually; material changes trigger re-assessment
- Critical suppliers: SOC 2 Type II or ISO 27001 certification required
- Sub-processor register published in Privacy Policy (BL-PP-2026-001, Section 6.2)

---

## 11. Business Continuity and Disaster Recovery

*Betopia Limited is ISO 22301:2019 certified for Business Continuity Management.*

| Metric | Target |
|---|---|
| Recovery Time Objective (RTO) | 4 hours for critical systems |
| Recovery Point Objective (RPO) | 1 hour maximum data loss |
| Backup Frequency | Daily full backup + continuous incremental |
| Backup Testing | Quarterly restore tests |
| BCP Testing | Annual full tabletop exercise |
| DR Failover Testing | Bi-annual |

---

## 12. Incident Response

### 12.1 Incident Classification

| Severity | Definition | Response Time | Escalation |
|---|---|---|---|
| Critical (P1) | Active breach; ransomware; data exfiltration | < 1 hour | CEO, Legal, DPO — all hands |
| High (P2) | Suspected breach; significant system impairment | < 4 hours | IT Lead, DPO, Department Head |
| Medium (P3) | Policy violation; phishing attempt | < 24 hours | IT Lead, Line Manager |
| Low (P4) | Near miss; minor policy deviation | < 72 hours | IT Security team |

### 12.2 Personal Data Breach Notification
- **GDPR / UK GDPR:** Supervisory authority notification within **72 hours** (GDPR Article 33)
- **Individuals:** Notified without undue delay where breach poses high risk (GDPR Article 34)
- **CCPA:** California residents notified without unreasonable delay

### 12.3 Reporting Security Concerns
Report suspected vulnerabilities or incidents to: **security@betopialimited.com**
We acknowledge reports within 48 hours.

---

## 13. Human Resources Security

### Pre-Employment
- Background screening for roles with access to Confidential/Restricted data
- NDA signed before commencing employment

### During Employment
- Mandatory Information Security Awareness training within 30 days of joining
- Annual refresher training (phishing, social engineering, data handling)
- Simulated phishing exercises at least bi-annually

### Termination
- All access revoked within 24 hours of termination
- Company devices and assets recovered on or before last day
- Confidentiality obligations continue post-employment

---

## 14. Compliance and Audit Schedule

| Activity | Frequency | Responsible Party |
|---|---|---|
| Internal security audit (full scope) | Annual | IT Security Lead + external auditor |
| ISO 22301 surveillance audit | Annual | QRO (external certifying body) |
| ISO 9001 surveillance audit | Annual | QRO (external certifying body) |
| Penetration testing (external) | Annual minimum | Qualified third-party tester |
| Vulnerability scanning (automated) | Monthly | IT Security team |
| Access rights review | Quarterly | Line managers + IT Security |
| Policy review and update | Annual | DPO / Security Lead + CEO sign-off |

---

## 15. Policy Governance

| Role | Responsibility |
|---|---|
| CEO / Board | Ultimate accountability; annual sign-off on policy |
| Data Protection Officer (DPO) | GDPR compliance; breach notification; data subject rights |
| IT Security Lead | Day-to-day security operations; vulnerability management; incident response |
| All Managers | Enforcing policy within teams; access provisioning requests |
| All Staff & Contractors | Complying with this policy; reporting incidents and suspicious activity |

Policy exceptions require written approval from the IT Security Lead and CEO.

---

## 16. Contact and Reporting

| Contact | Email |
|---|---|
| Security incidents / vulnerabilities | security@betopialimited.com |
| Privacy / DPO | privacy@betopialimited.com |
| General | info@betopialimited.com |
| Postal | Daisy Garden, House 14, Block A, Banasree, Dhaka-1219, Bangladesh |

---

**Document Reference:** BL-SP-2026-001 | **Version:** 1.0 | **Effective:** 11 May 2026 | **Next Review:** 11 May 2027 | **Classification:** PUBLIC

*Approved by: Betopia Limited Board of Directors*
*ISO 22301:2019 Certified by QRO | ISO 9001:2015 Certified by QRO*

---
*© 2026 Betopia Limited. All rights reserved.*

<template>
    <div class="container">
      <!-- Background Image -->
      <n-image :src="backgrand" width="100%" height="100%" object-fit="cover" preview-disabled />
      
      <!-- Jobs Container -->
      <div class="jobs-wrapper">
        <div class="jobs-grid">
          <div v-for="(job, index) in json" 
               :key="index" 
               class="job-card"
               @click="goToRoute(job)">
            <h3 class="job-title">{{ job.job_title }}</h3>
            
            <div class="job-meta">
              <div class="meta-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ job.location }}</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-money-bill"></i>
                <span>{{ job.salary_range }}</span>
              </div>
            </div>
            
            <div class="job-details">
              <div class="detail-item">
                <strong>Type:</strong> {{ job.job_type }}
              </div>
              <div class="detail-item">
                <strong>Visa:</strong> {{ job.visa }}
              </div>
              <div class="detail-item">
                <strong>Package:</strong> {{ job.package }}
              </div>
            </div>
            
            <p class="job-description">{{ job.description }}</p>
            
            <button class="apply-btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter, useRoute } from 'vue-router'
  import { NImage } from 'naive-ui'
  import backgrand from '../assets/images/graduz-mk.jpg'
  
  const router = useRouter()
  const route = useRoute()
  
  const goToRoute = (route) => {
    router.push(`/`)
  }
  
  const json = [
  {
    "job_title": "Head of Treasury",
    "location": "Europe",
    "salary_range": "€60000 — €80000 per annum",
    "job_type": "Permanent",
    "visa": "No visa sponsorship provided",
    "package": "Package is negotiable",
    "description": "This is a fantastic opportunity for a Russian-speaking treasury professional based in the EU who would like to secure a stable position with a well-established international payments provider/financial concierge company. This role requires management of the company’s treasury operations, including liquidity management, investments, financial risks, and payments. Coordinates the team’s work, develops and implements strategies."
  },
  {
    "job_title": "Head of HR and Operations",
    "location": "Europe",
    "salary_range": "€60000 — €80000 per annum",
    "job_type": "Permanent",
    "visa": "No visa sponsorship provided",
    "package": "Salary, benefits and competitive bonus",
    "description": "This is a fantastic opportunity for an experienced HR professional with an understanding and willingness to understand operational tasks as part of the role to join an international investment holding with offices in the UK and Europe. We are ideally looking for an EU-based candidate, possibly in the Czech Republic, Montenegro, Germany, or Cyprus. Other locations may be considered."
  },
  {
    "job_title": "Head Accountant/Head of Audit Reporting Department",
    "location": "Europe",
    "salary_range": "€30000 — €40000 per annum",
    "job_type": "Permanent",
    "visa": "No visa sponsorship provided",
    "package": "Package is negotiable",
    "description": "This is a fantastic opportunity for an experienced accountant to join a well-established international payment provider company as the Head of the Audit Department. You will be reporting to the Head of the Finance Department. The goal of the role is to ensure timely submission of reports for entrusted companies, maintain registries, provide documents to relevant parties."
  },
  {
    "job_title": "Investments Accountant FM/Deputy CFO",
    "location": "Central London",
    "salary_range": "£80000 — £120000 per annum",
    "job_type": "Permanent",
    "visa": "Employer may consider sponsoring work visa for suitable candidates from abroad depending on their experience",
    "package": "Salary, benefits and competitive bonus",
    "company": "Single Investments-focused Family Office",
    "description": "This is a fantastic opportunity for an experienced Investments Accountant/Financial Manager to join our client’s team at a Single Family Office in Central London. Requirements include strong financial management, controlling, and accounting experience, as well as sound knowledge of analyzing investment portfolios and understanding investment portfolio data."
  },
  {
    "job_title": "Estate Manager",
    "location": "Hampshire, UK",
    "salary_range": "£65000 — £75000 per annum",
    "job_type": "Permanent",
    "visa": "No visa sponsorship provided",
    "package": "Great live-in accommodation all expenses paid, potential of bonus",
    "description": "This is a great opportunity for an experienced Russian Speaking Estate Manager to join a large estate in Reading as an Estate/Household Manager. You will work with an extensive team of household staff, as well as farm and vineyard staff. You will become the main point of contact for the Principal and the family."
  },
  {
    "job_title": "Non-Executive Director. Legal Practice – Dispute Resolution, Sanctions and Asset Recovery",
    "location": "London",
    "salary_range": "£1000 — £1200 per day",
    "job_type": "Part Time",
    "visa": "No visa sponsorship provided",
    "package": "Remote or Hybrid/Online communication, Part-time: Two days per month, Payment: £1k per day",
    "description": "This is a great opportunity for a Senior Legal Professional to join a boutique international law firm as a Non-executive Director to provide guidance and advice 2 days per month. It is a part-time remote (or hybrid, whichever is most convenient) role."
  },
  {
    "job_title": "Chief of Staff – HR and Operations",
    "location": "Central London",
    "salary_range": "£80000 — £100000 per annum",
    "job_type": "Permanent",
    "visa": "No visa sponsorship provided",
    "package": "Salary, benefits and competitive bonus",
    "description": "This is a great opportunity for an operationally-focused HR Executive/Chief of Staff to join a private investments company with additional project-focused European operations. The role will entail a scope of project-focused operational tasks and a substantial block of general HR/people management tasks, including recruitment (UK and EU), policies and procedures, talent development, project-focused KPIs, and performance management."
  }
]

  </script>
  
  <style scoped>
  .container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  .jobs-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    padding: 2rem;
    background-color: rgba(255, 255, 255, 0.9);
  }
  
  .jobs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .job-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }
  
  .job-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
  
  .job-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .job-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 0.9rem;
  }
  
  .job-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 1rem 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  
  .detail-item {
    font-size: 0.9rem;
    color: #444;
  }
  
  .detail-item strong {
    color: #2c3e50;
  }
  
  .job-description {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .apply-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .apply-btn:hover {
    background-color: #2980b9;
  }
  
  @media (max-width: 768px) {
    .jobs-grid {
      grid-template-columns: 1fr;
    }
    
    .jobs-wrapper {
      padding: 1rem;
    }
  }
  </style>
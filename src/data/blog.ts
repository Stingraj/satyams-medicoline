export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  bgColor: string; // Pastel background color
  textColor: string; // Dark text color for the category text on placeholder
  fullContent: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'elderly-care',
    category: 'Elderly Care',
    title: '10 Essential Tips for Elderly Care at Home',
    excerpt: 'Caring for our elders requires patience, love, and a structured healthcare routine.',
    date: 'May 28, 2026',
    bgColor: '#FFF3E0', // subtle pastel orange
    textColor: '#E65100',
    fullContent: [
      'Caring for our elders requires patience, love, and a structured healthcare routine. As our loved ones age, their health needs become more complex and require focused, professional attention to ensure safety and comfort.',
      '1. Create a Safe Home Environment: Remove tripping hazards, install grab bars in bathrooms, ensure proper lighting, and use non-slip rugs throughout the house. Fall prevention is the single most critical factor in elderly home safety.',
      '2. Medication Management: Maintain a clear pill organizer schedule, set regular alarms, and review all prescriptions with a licensed physician to prevent dangerous drug interactions or skipped doses.',
      '3. Regular Health Checkups: Schedule routine blood tests, vital checks, and diagnostic screenings. Catching issues early prevents hospitalization and ensures timely adjustments to treatments.',
      '4. Professional Physiotherapy at Home: Keep seniors mobile and flexible. Regular targeted physical therapy improves balance, keeps joints healthy, and aids recovery from strokes or orthopedic procedures.',
      '5. Provide Emotional & Mental Support: Isolation can cause cognitive decline and depression in seniors. Spend high-quality social time with them, encourage gentle hobbies, and involve them in family decisions.',
      '6. Structured Nutrition Plan: Design a diet rich in fiber, calcium, proteins, and low in sodium to manage heart health, bone density, and digestion.',
      '7. Professional Nursing Care: Hiring qualified in-home nurses ensures professional medical supervision for wound dressings, injections, and medical equipment management.',
      '8. ICU at Home Option: For critically ill seniors, setting up a high-standard critical care unit at home provides peace of mind and reduces hospital infection risks.',
      '9. Emergency Action Plan: Keep emergency contact numbers, medical history reports, and hospital preferences easily accessible for all caregivers in the house.',
      '10. Medicoline Home Visit Services: Medicoline provides comprehensive support, including expert doctor home visits, experienced nurses, 24/7 emergency care, and home diagnostic support.'
    ]
  },
  {
    id: 'icu-care',
    category: 'ICU Care',
    title: 'Understanding ICU at Home — What Families Need to Know',
    excerpt: 'Setting up a critical care unit at home can be overwhelming.',
    date: 'May 20, 2026',
    bgColor: '#E3F2FD', // subtle pastel blue
    textColor: '#0D47A1',
    fullContent: [
      'Setting up a critical care unit at home can be overwhelming. When a loved one requires critical care after a major hospital procedure or during terminal illness, transitioning to an ICU at home is a highly compassionate and clinical solution.',
      'Required Medical Equipment: A comprehensive home ICU requires professional medical setups, including mechanical ventilators, BiPAP/CPAP machines, oxygen concentrators, multi-parameter vital monitors, suction machines, and specialized ICU beds with alpha mattresses to prevent pressure ulcers.',
      'What Professional Nurses Do: Registered ICU nurses are responsible for 24/7 vital monitoring, administering complex intravenous medications, managing ventilator settings, managing tube feedings, preventing infections, and providing immediate emergency response.',
      'Monitoring Vitals: Continuous tracking of oxygen saturation (SpO2), heart rate, blood pressure, respiratory rate, and temperature is crucial. Any slight deviation from safe baselines must be flagged immediately.',
      'Cost Comparison: An ICU at home is highly cost-effective, typically reducing overall healthcare costs by 50% to 70% compared to prolonged corporate hospital ICU stays, without compromising clinical quality.',
      'How Medicoline Sets It Up: Medicoline delivers a complete ICU setup to your home within hours, complete with certified medical equipment, experienced ICU-trained nurses, and regular clinical audits by senior consulting doctors.',
      'Qualifications for ICU at Home: Patients with chronic respiratory failure, neurological disorders, post-operative recovery needs, or terminal care needs are ideal candidates for professional home ICU care.',
      'Family Training: Educating close family members about standard hygiene protocols, simple equipment alerts, and psychological comfort strategies is key to successful home care.',
      'Emergency Protocols: Medicoline ensures immediate emergency backups, maintaining direct communication lines with doctors and establishing pre-arranged ambulance plans for hospital transfers if critical complications arise.'
    ]
  },
  {
    id: 'wellness',
    category: 'Wellness',
    title: 'The Importance of Regular Health Checkups',
    excerpt: 'Preventive healthcare is the key to a long healthy life.',
    date: 'May 15, 2026',
    bgColor: '#E8F5E9', // subtle pastel green
    textColor: '#1B5E20',
    fullContent: [
      'Preventive healthcare is the key to a long healthy life. Many chronic diseases, including diabetes, hypertension, and early-stage cardiovascular issues, develop silently without noticeable symptoms until they reach advanced stages.',
      'Why Annual Checkups Matter: Routine checkups allow doctors to establish a baseline of your health metrics and catch warning signs early. Early detection significantly increases the effectiveness of medical treatments and lifestyle adjustments.',
      'Essential Blood Tests: Regular screening should include Complete Blood Count (CBC), fasting blood glucose, HbA1c for long-term sugar control, Lipid Profile for cholesterol, Kidney Function Tests (KFT), Liver Function Tests (LFT), and Thyroid panel.',
      'Diabetes & Thyroid Screening: Early diagnosis of thyroid disorders and pre-diabetes lets you reverse or manage these conditions successfully through diet, exercise, and minor medications, preventing severe organ damage.',
      'Benefits of ECG at Home: Getting an Electrocardiogram (ECG) in the comfort of your home removes physical stress and anxiety, ensuring highly accurate resting heart rhythm readings and early detection of cardiac concerns.',
      'Medicoline Preventive Packages: Medicoline offers comprehensive, affordable wellness checkups including Senior Citizen Packages, Full Body screening, and free home sample collection, delivering highly accurate lab results in record time.',
      'The Cost of Ignoring Health: Investing in early preventive care is a fraction of the cost of treating emergency health crises, surgeries, or prolonged hospital stays. Regular checkups protect both your health and your family finances.'
    ]
  }
];

# Hippo

### Midterm vision (maybe feasible)
"Getting a medical scan as easy as getting a haircut". Imagine your routine cancer screening at a local imaging center max 40min away, as follows:

1. Walk in and get scanner assigned
2. Key personnel (e.g. nurse) does minimal preparation for scanner (security, no ferromagnetic stuff etc.)
3. Get Scanned
4. Walk out


In around 45min you are done with whatever routine check-up you wanted to do. You will instantly receive your diagnosis and any proposed follow up steps via phone, delivered via Hippo in an understandable and personal way.
The new diagnosis will be integrated and checked against your entire medical history by Hippo and counter measures to fight any upcoming symptoms can be communicated and implemented immediately in your day to day (e.g. eat more healthy, exercise more).
Any wearables that you might wear can be connected to Hippo and can help you track daily progress and vital signs etc.

### Longterm Vision (very speculative, let's go completely crazy for a minute)
"Knowing 24/7 what is going on in your body both physically and mentally" - Can Scanners get cheaper? Will there be a future with minimalistic scanners that you can wear or that everybody can have in their homes? How will medical imaging evolve? Will it stay relevant or will at some point everything be visible through blood analysis or DNA modificaitons? Can we have an agent that can track your whole life in a privacy-preserving and trustworthy way?

---

### Proposal for EPFL AI for good Hackathon Demo

To run current next.js application, clone repo, install node packages by `npm i` and run `npm run dev`.

This repo should include:
- **Upgraded website UI**
  - New website layout: scan with annotation + diagnosis on the right, chat interface on the left (with chat history ideally)
  - Upload button of image studies (in medical center analogy this would happen automatically)
  - Download button for generated radiology report 
- **Personal Medical Chatbot (representative of your 24/7 Medical Companion)**
  - *Input:*
    - Output of MILA researchers prediction (score for 18 pre-defined chest xray pathologies)
    - Patient metadata (e.g. ):
      - wearables data input (e.g. vital signs etc.)
      - existing medical documents
      - previous chat interactions (all history is saved)
  - *Output:*
    - Non-expert explanation of the diagnosis
    - A personalized follow-up recommendation
      - in negative case: "Everything looks normal, congrats you seem to have a very healthy body! Here is your follow-up appointment for your next checkup. You seem to have a very healthy lifestyle, keep eating blabla food and exercising."
      - in positive case: "It seems you could have clinically-significant prostate cancer. You have a PI-RADS score of 5, and we could observe a 10mm lesion in the anterior right base region of your prostate. Also your prostate seems to be mildly enlarge with a Volume of XY ml. Would you like a deeper explanation and simpler terms? Afterwards it would be good to schedule a checkup appointment with a Radiologist nearby to discuss the situation. Good luck!" 
  - *Models:*
    - Models to use: Meditron (7B or 70B is possible)
    - Model tasks to implement:
      - Simplify medical diagnosis and explain them to non-experts
      - Consider medical background of patient (e.g. by prompting background information at first)
      - Consider environment of patient and make him aware of any medical centers he could fix appointments at
- **BONUS: Radiology report generator**
  - Including annotated image, in universal format the findings found by algorithms + recommendation 

NOT FOR MEDICAL USE.

This repo is based on [Chester the AI Radiology assistant](https://github.com/mlmed/chester-xray). Thank you to the authors for their great work!

---
title: Transactions
description: This case study explores the innovative approaches and challenges faced in improving the transaction selection process for HM Land Registry's Digital Registration Service. It highlights the use of AI-driven design and collaborative working methods to address complex user journey issues.
date: 2024-06-25
related:
  items:
  - text: Application type selection
    href: /drs/application-type-selection
tags:
  - AI
  - Decision tree
  - DRS
---

## Background

The DRS team has been working on improving the transaction selection process for users submitting applications to HM Land Registry. The current system, which relies on users selecting from a large list of transaction types, has been identified as a significant pain point in the user journey.

![Current DRS transaction selection interface](/drs/2024-06-25-transactions/img-drs-transactions-001.png "Current DRS transaction selection interface")

## The challenge

The transaction selection process in DRS is causing several issues:

1. Users are frequently selecting incorrect transaction types, leading to applications being misrouted resulting in requisitions.
2. The extensive list of over 200 transaction types is overwhelming and confusing for users.
3. The mixed terminology used in the transaction list is often unfamiliar to users.
4. The system's complexity is leading to a high error rate, with approximately 30% of applications being submitted with incorrect transaction types.

These issues are resulting in significant inefficiencies, both for users and HM Land Registry.

## Our approach

To address these challenges, the UCD team adopted an innovative and multi-faceted approach:

1. **Research and analysis**: We conducted user research sessions to understand the pain points in the current process and gathered insights from DRS Champions and caseworkers.

2. **Collaborative ideation**: We held workshops and design sessions to explore potential solutions, involving the UCD team, developers, product, and subject matter experts.

3. **Focus on high-volume transactions**: We prioritised the most common and problematic transaction types, particularly transfers (TP1 and TR1), to make the biggest impact.

4. **AI-powered analysis**: In a breakthrough approach, we leveraged AI to study HMLR forms and reverse-engineer the process. This innovative method allowed us to create a decision tree that could guide users through the complex selection process.

5. **Iterative design**: We developed several design concepts, focusing on simplifying the user journey and guiding users to the correct transaction type.


![User intent question and confirmation pattern](/drs/2024-06-25-transactions/img-drs-transactions-002.png "User intent question and confirmation pattern")

![AI-powered decision tree concept](/drs/2024-06-25-transactions/img-drs-transactions-003.png "AI-powered decision tree concept")


<a href="https://www.figma.com/board/dvTn9L6mEN3IU2MPvDMswW/DRS-AI-Decision-Tree" target="_blank">Click here to explore the AI-powered decision tree concept in Figjam</a>

## What we did

### Innovative AI approach

We made a significant breakthrough by using AI to analyse HMLR forms and generate questions based on the TP1 and TR1 forms. This innovative approach allowed us to:

1. Create a detailed branching illustration for the TP1 (transfer of part) and TR1 (transfer of whole) scenarios.
2. Develop a decision tree showing the sequence of questions leading to the correct transaction type.
3. Build a logical flow that starts with asking about the type of transaction and branches based on whether it's a transfer of whole or part, and if it's of monetary value.

Importantly, this approach was inspired by modern websites and apps that use AI to ask users "What do you want to do?" or "What are you looking for?" when they land on a page. We envisioned scaling this concept to potentially cover the entire service, asking users upfront about their intentions or, in this scenario, what forms they have in front of them, and then guiding them towards their desired goal.


![TP1 and TR1 branching illustration](/drs/2024-06-25-transactions/img-drs-transactions-004.png "TP1 and TR1 branching illustration")

### Stakeholder engagement and feedback

We presented the branching illustration to key stakeholders. The feedback was overwhelmingly positive:

- The approach was seen as aligning well with discussions held with specific users (e.g., Gowling).
- Stakeholders recognised that the transfer scenario covered in the illustration would account for a significant percentage of transactions (60-70%).
- There was strong interest in using the branching approach as a proof of concept, starting with the most common and complex transaction types.
- Some stakeholders expressed keen interest in testing this AI approach in other areas of HM Land Registry, recognising its potential for improving user experience across various services.

### Focus on high-volume and problematic transactions

Based on stakeholder feedback and data analysis, we focused our efforts on the most impactful areas:

1. Transfers (both whole and part)
2. Register updates
3. Leases

This focus allowed us to address the main objective highlighted by the product team: to stop Transfers of Part (TPs) and Transfers for Value (TFVs) from being incorrectly routed as Register Updates (RUs), which was causing a significant number of cancellations and retakes (CRTIs).

### Content design challenges

One of the most significant challenges we faced was in content design. We were given an almost impossible task due to the complexity of language and terminology used in the land registration process. We discovered that:

- HM Land Registry uses its own specific terminology to describe processes and transactions.
- Users (conveyancing firms and other stakeholders) often use their own internal languages and terms, which may differ from HMLR's terminology.
- Different user groups tend to have unique ways of describing things, which don't necessarily align with HMLR descriptions.

This linguistic diversity made it extremely challenging to design content that could be universally understood by all users while still maintaining legal and procedural accuracy.

[Insert image: Example of terminology differences between HMLR and users]

## Pushing for collaborative working

Throughout this project, the UCD team has been advocating for a significant change in our ways of working. Historically, design work would be completed in isolation and then "thrown over the wall" to developers, leading to miscommunication, lost details, and wasted time as the development output often didn't fully reflect the approved design.

To address this, we've been pushing for a more collaborative approach within DRS:

1. **Open design process**: We've been using Figma as a collaborative tool, keeping our design work open and accessible to the wider team, including developers, from the start.

2. **Early input**: This approach allows us to gather input from developers and other team members early in the process, helping us identify technical restrictions and potential issues before they become problematic.

3. **Continuous communication**: We've encouraged ongoing dialogue between designers, developers, and other stakeholders throughout the design and development process.

While this new way of working has shown promising results, it hasn't been without its challenges:

- **Old habits**: As with any cultural shift, we've found that old habits can be hard to break. The team as a whole has sometimes struggled to fully adapt to this more collaborative approach.

- **Communication gaps**: Despite our best efforts, there have been instances where decisions made earlier in the process and approved designs weren't fully communicated or understood across the entire team. This has occasionally led to last-minute questions and potential delays.

- **Ongoing advocacy**: We've realised that instilling this collaborative culture is an ongoing process that requires continuous effort and reinforcement from everyone involved.

![Illustration of collaborative design process](/drs/2024-06-25-transactions/img-drs-transactions-005.png "Example of collaborative design in Figma")

Despite these challenges, we believe that this push for truly collaborative working is crucial for the long-term success of our projects. It allows us to create more robust, technically feasible designs from the outset, reducing rework and improving the overall quality of our output.

As we continue to refine this approach, we're seeing gradual improvements in team communication and project efficiency. However, we recognise that cultural change takes time, and we're committed to continuing our advocacy for this collaborative method in future projects.

## Outcomes and lessons

While the project faced significant challenges and underwent scope changes, we learned several valuable lessons:

1. **Innovation in complex domains**: The use of AI to analyse forms and create decision trees proved to be a powerful tool in simplifying complex processes, with potential for wider application.

2. **Importance of focusing on high-impact areas**: By prioritising high-volume and problematic transaction types, we could make significant improvements that address the most pressing issues.

3. **Challenges of language and terminology**: The project highlighted the critical need for a common language between HMLR and its users, and the difficulties in achieving this.

4. **Balance between ambition and practicality**: While our AI-driven approach showed promise, we had to adapt to changing priorities and resource constraints.

5. **Need for data-driven decisions**: The project highlighted the importance of having access to detailed error data to validate our assumptions and measure the impact of our changes.


## Next steps

Towards the end of the project, there was a significant shift in priorities. The product team emphasised the need to focus on reducing cancellations and retakes (CRTIs). This led to a descoping of our work on the transaction list problem, which was the initial focus of the project.

Our attention was redirected to an earlier page in the journey: the 'Select application type' page. This shift was primarily due to limited development resources and other high-priority work, such as AAP (adding additional parties).

For more details on this change in direction and the subsequent work on improving the application type selection process, please refer to our companion case study: [Select application type](/drs/application-type-selection/).

Despite this change in scope, the insights gained from our innovative approach to transaction selection remain valuable for future improvements to the DRS system. We will continue to explore ways to implement our AI-driven approach and address the terminology challenges identified during this project.


#### UCD team

- Alison Miller - Content Design
- Darren Courtney - Interaction Design
- Iain Acton - User Research
- Simon Herd - User Research
- Katie Mason - User Research


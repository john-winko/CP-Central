# Problem statements
- Students do not have easy access to each other's social info (LinkedIn, Github, portfolios) and sometimes is difficult to remember/find it when connecting with peers
- Calendaring is hit & miss at times and finding specifically what day taught what topics was difficult to find
- No cental/standard location for daily/recurring links to tasks (slack has it and we click the pinned links or wait for instuctor to repost a slack message with link)
- Pair programming needs better randomization, multiple instances of partners seeing same person multiple times and never having seen some
- Daily questionnaire associated with daily checkins had form fields that are only required half of the time and when we fill them out, we have to remember all the good/bad from previous day on how the pair programming session went. Sometimes doing checkin is an afterthough and is missed.

# How we seek to solve these issues
- Web portal for students and instructors
- Student bios persisted in database and can be looked up on a cohort viewable class roster
- Ability to randomize with entropy so students are less/not likely to be paired up with same person before pairing with rest of the class
- Randomizer can also be used to pick students for random interactions (practice behavioral questions, whiteboarding, etc)
- Daily checkins will be completed through the portal. Allows for a quick view to see if a student forgot to check in as well as a quick view for instructors to take attendance. This data can also be exported to any regulatory format specified by Code Platoon.
- Polling feature
  - Allows a quick Q&A such as knowledge checks or voting (do we work through lunch today)
  - Quick feedback for isolated topics (what part did student get lost on with a multiple choice, fill in blank, etc.)
  - Code Platoon specific surveys and feedback forms could also be migrated here
- Student landing page will have the daily check-in link if still required and/or any other pertinent or commonly used links (curriculum repo)
- Curriculum would be parsed into a daily format so that previous, current and next day lectures, materials, supplemental links etc can be viewed/navigated from the landing page. Lesson topics would be back filled with the prior cohorts videos if applicable to add supplemental lecture material.
- Students will have access to a progress sheet for their challenges where they can give feedback on difficulty, how much the day's lessons did/did not prepare them and misc feedback. Instructors can also see these progress checks to pivot or supplemental review as necessary for topics that were not well received.
- Assessment rubric and grades could be handled from the portal, seeing exactly which marks were taken rather than just a final grade
- View the markdowns for the lesson in browser

# Stretch goals most likely outside the scope / complexity allowed
- Integration with slack and/or zoom clients to save/timestamp questions/answers as lesson is taught
- Changing the help format from slack to a forum format 
  - (which could follow a stack overflow format and send slack messages on resolved posts if integrated)
  - Allows for better search options (by user, date, keywords etc) -> trying to find a previously solved issue in slack from a few weeks ago is quite an undertaking
- Embedded zoom/slack clients in browser
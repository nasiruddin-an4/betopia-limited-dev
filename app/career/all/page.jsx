import AllJobsClient from "./AllJobsClient";

export const metadata = {
  title: "All Open Positions - Betopia Group Careers",
  description:
    "Browse all open job positions at Betopia Group. Find your next career opportunity with us.",
};

async function getJobs() {
  // Static mode: No API fetch
  return [];
}


export default async function AllJobsPage() {
  const jobs = await getJobs();
  return <AllJobsClient jobs={jobs} />;
}

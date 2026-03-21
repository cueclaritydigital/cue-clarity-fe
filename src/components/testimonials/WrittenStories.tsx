import WrittenStoriesCommon from "@/components/common/WrittenStories";
import { WRITTEN_STORIES } from "@/lib/data/success-stories";

export default function WrittenStories() {
  return <WrittenStoriesCommon stories={WRITTEN_STORIES} />;
}

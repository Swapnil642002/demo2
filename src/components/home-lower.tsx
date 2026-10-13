import { HomeLegacy, HomeFacilities } from "@/components/home-legacy";
import { HomeLeadership, HomeAdmissions, HomeFounder, HomeFaq } from "@/components/home-rest";
import { HomeGallery } from "@/components/home-gallery";

export function HomeLower() {
  return (
    <>
      <HomeLegacy />
      <HomeFacilities />
      <HomeLeadership />
      <HomeAdmissions />
      <HomeGallery />
      <HomeFounder />
      <HomeFaq />
    </>
  );
}


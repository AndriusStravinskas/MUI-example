import { linksGroup } from './links-data';

// eslint-disable-next-line import/prefer-default-export
export const getActiveLinksGroupTitle = (currentUrl: string) => {
  for (let i = 0; i < linksGroup.length; i += 1) {
    const linkGroup = linksGroup[i];
    const hasActiveLink = linkGroup.linksData
      .map<string>(({ link }) => link)
      .includes(currentUrl);

    if (hasActiveLink) return linkGroup.title;
  }

  return null;
};

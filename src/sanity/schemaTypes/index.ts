import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'

// Objects
import {seoMetadata} from './objects/seoMetadata'

// Page-builder blocks
import {heroSection} from './blocks/heroSection'
import {textWithImage} from './blocks/textWithImage'
import {cardsGrid} from './blocks/cardsGrid'
import {processSteps} from './blocks/processSteps'
import {audiencePathways} from './blocks/audiencePathways'
import {statsBanner} from './blocks/statsBanner'
import {faqSection} from './blocks/faqSection'
import {comparisonSection} from './blocks/comparisonSection'
import {ctaSection} from './blocks/ctaSection'
import {expertBio} from './blocks/expertBio'
import {testimonialSlider} from './blocks/testimonialSlider'

// Documents
import {servicePage} from './servicePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Existing
    blockContentType,
    categoryType,
    postType,
    authorType,

    // Objects
    seoMetadata,

    // Page-builder blocks
    heroSection,
    textWithImage,
    cardsGrid,
    processSteps,
    audiencePathways,
    statsBanner,
    faqSection,
    comparisonSection,
    ctaSection,
    expertBio,
    testimonialSlider,

    // Documents
    servicePage,
  ],
}

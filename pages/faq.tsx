// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is Emoji Loot?</h3>
          <p>
            Emoji Loot is a collection of 8,000 unique bags of adventurer gear,
            originally released by{" "}
            <a
              href="https://twitter.com/dhof/status/1431316631934967815"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dom Hofmann
            </a>
            . At release, anyone could claim loot bags for just gas, and all
            bags were claimed in under 4 hours. Each loot bag contains 8 items:
            a piece for an adventurer&apos;s chest, foot, hand, head, neck, ring,
            waist, and weapon.
          </p>
          <p>
            Emoji Loot is an unaudited project. Bags #1 to #7777 were claimable by
            anyone and #7778 to #8000 are currently reserved for the contract
            deployer.
          </p>
        </div>

        {/* Why is loot special? */}
        <div className={styles.faq__item}>
          <h3>Why is loot special?</h3>
          <p>
            Emoji Loot is unique—the first project of its kind. With no company, art,
            team, or attributes, Emoji Loot makes it impossible to gate-keep any
            creative decisions (h/t{" "}
            <a
              href="https://twitter.com/john_c_palmer/status/1432606797186179072?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              @john_c_palmer
            </a>
            ).
          </p>
          <p>
            Emoji Loot is the unfiltered, uncensorable building block for stories,
            experiences, games, and more, in the hands of the community, at no
            cost. Emoji Loot pursues complete decentralization from day one.
          </p>
        </div>

        {/* Can I build with loot? */}
        <div className={styles.faq__item}>
          <h3>Can I build with Emoji Loot?</h3>
          <p>
            Yes, you are free to use Emoji Loot in any way you want. For inspiration,
            see existing{" "}
            <Link href="/resources">
              <a>resources</a>
            </Link>{" "}
            put together by the community.
          </p>
        </div>

        {/* Am I priced out of loot? */}
        <div className={styles.faq__item}>
          <h3>Am I priced out of loot?</h3>
          <p>
            Not at all. Through{" "}
            <a
              href="https://twitter.com/dhof/status/1433110412187287560?s=20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Synthetic Emoji Loot
            </a>
            , all addresses have access to virtual Emoji Loot that developers can
            integrate into the Emoji Loot projects they build.
          </p>
          <p>
            Thus, anyone with an Ethereum wallet is allowed to participate in
            the ecosystem, while still maintaining distinction between original
            Emoji Loot and synthetics.
          </p>
        </div>

        {/* How do I value loot bags? */}
        <div className={styles.faq__item}>
          <h3>How do I value Emoji Loot bags?</h3>
          <p>
            They say that value is always in the eye of the beholder. Emoji Loot is no
            different, with no explicit rarities specified at launch. How you
            value a loot bag is up to you.
          </p>
          <p>
            Still, the community has begun to devise many mechanisms by which to
            assess the rarity of bags and their items. Some of these include{" "}
            <a
              href="https://github.com/Anish-Agnihotri/dhof-loot/blob/master/output/rare.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              rarity by occurence
            </a>{" "}
            or{" "}
            <a
              href="https://0xinventory.app/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              item score
            </a>
            .
          </p>
          <p>Remember, use your own discretion when valuing a loot bag.</p>
        </div>
      </div>
    </Layout>
  );
}

# AWS Notes

Author: Lucas Pichette

## Project Description

Free, highly available, always-up-to-date, comprehensive yet to-the-point, and extremely easy to use AWS notes.

## Problems to Solve

1. *Extremely* cost efficient
1. Storage
1. Easy to create and modify notes
1. Worldwide accessibility
  1. Start with U.S. accessibility
1. Very quick (and -- moreso -- relevant) searching

### *Extremely* Cost Efficient

To aid in my own learning of AWS Services "under-the-hood" and to help drive down costs, I will be creating my own file servers, Lambda VMs, and more!

The latter was a difficult decision to make, as it's not "using AWS resources". So, I've decided that the latter version will be the public version, and that I would create an alternative "personal-use" version.

The "personal use" version will be IaC that users can use to provision this same project but on AWS resources to make their own AWS notes! >:)

While all of this really hits the *Extremely* Cost Efficient requirement, it's honestly mostly done for my own learning as well -- even if it makes this project a bit harder to complete.

### Storage

#### Version Control

Ideally I'd like to keep all of my version control on GitHub. It's free, and incredibly effective at version control.

To fully conform to the latter, I should have my notes stored on GitHub.

Since I'm trying to be as cost-effective as possible, and learn as much as I can, let's handle the issue of:

- Browsers aren't able to render Markdown
- Markdown isn't great with CSS

By running the updated files through a custom md-2-html converter and then publishing the updated files, and invalidating any custom caches for specifically those updated files.

- [ ] Custom CI/CD Server
- [ ] Custom md-2-html converter
- [ ] Trigger Custom CI/CD (C-CI/CD) Server via GitHub Actions
- [ ] Custom hosting file-server
- [ ] Upload resulting converted files to hosting origin (custom file server)

UPDATE: 

To create a file server I started looking at already existing solutions made by the community. Primarily, [Perfect Media Server](https://perfectmediaserver.com/tech-stack/snapraid/).

However, this file server is one that would be frequently accessed and modified. SnapRAID, as the site notes, only updates parity once every 24 hours. This leaves a larger room for error than I'm comfortable with.

This leaves [unraid](https://unraid.net/pricing). $60 for a one-time use isn't bad, I'm thankful it's not a subscription-based service. But, it does increase CapEx.

Speaking of CapEx, the current build is looking like:

- $351 hardware
  - $67 Intel Pentium CPU
  - $15 Zalman CNPS8900 CPU Cooler
  - $180 MSI Z97
  - $56 G.Skill Ripjaws X 16GB (2x8) DDR3-1600
  - $33 Samsung Spinpoint M8 1TB 2.5" HD
- $60 unraid

Roughly $400 here on hardware. 

Now, the hardware likely isn't the most cost-optimized. I'm trying to make sure it's all compatible, built to last, and affordable. However, I'm just not someone who loves being super low-level with hardware. 

The latter is funny enough, as I *love* high level hardware concepts. But actually making sure parts are compatible, installation, etc is boring to me. So, ideally I'd like to focus as little on the low-level stuff as possible.

Assuming a lifespan of 8 years on the entire server, that's an estimated expense of $4/mo. 

It may actually be more cost-effective to go with AWS. AWS virtualizes a lot of their hardware -- consider Firecracker, which allows them to be incredibly efficient with their hardware.

I am not AWS, and cannot lend my unused resources to someone else to help decrease projected $/mo.

With all of this in mind, I'd still like to have the learning experience that comes with trying to replicate AWS Resources at-home. So, while it may go against my requirement of being *extremely* cost efficient, I will be proceeding with trying to replicate AWS resources at-home from scratch.

### Easy to Create and Modify Notes

.

### Worldwide Accessibility

.

#### U.S. Accessibility

. 

### Very Quick and Relevant Searching

.

## Personal Notes

### Lambdas

For Lambdas I can use [Firecracker](https://firecracker-microvm.github.io/).

## Hardware

Services I need to account for when determining hardware:

* Lambdas
* FileServer




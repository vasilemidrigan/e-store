import twoSmartphones from '@/public/images/desktop-version/smartphones/two-smartphones.jpg'

export default function CategoryIllustration() {
  return (
    <div className="CategoryIllustration">
      <h2 className="CategoryIllustration__header">Smartphones</h2>
      <img className="CategoryIllustration__img" src={twoSmartphones.src} alt="two smartphones" />
    </div>
  )
}
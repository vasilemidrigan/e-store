import mainPhoto from "@/public/images/desktop-version/smartphones/main-photo.png";
import secondPhoto from "@/public/images/desktop-version/smartphones/second-photo.png";

export default function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="ProductPage__overview">
        <div className="ProductPage__id">
          <span> Samsung S8 </span>
          <hr className="hr-thin" />
        </div>
        <div className="ProductPage__collage">
          <div className="ProductPage__collage__main-photo">
            <img src={mainPhoto.src} alt="smartphone" />
          </div>
          <div className="ProductPage__collage__photo-1">
            <img src={secondPhoto.src} alt="smartphone" />
          </div>
          <div className="ProductPage__collage__photo-2">
            <img src={secondPhoto.src} alt="smartphone" />
          </div>
          <div className="ProductPage__collage__photo-3">
            <img src={secondPhoto.src} alt="smartphone" />
          </div>
        </div>
        <div className="ProductPage__description">
          <div className="ProductPage__description__price">
            <span>376$</span>
          </div>
          <div className="ProductPage__description__about">
            <h2>About:</h2>
            <ul>
              <li>
                5.8-inch Super AMOLED curved display with Quad HD+ resolution
              </li>
              <li>Powered by Qualcomm Snapdragon 835 </li>
              <li>4 GB of RAM and 64 GB of internal storage</li>
              <li>12 MP rear camera with f/1.7 aperture, OIS, and PDAF </li>
              <li>
                3,000 mAh battery with fast charging and wireless charging Water
                and dust resistance with an IP68 rating.
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr-thin" />
      </div>
      <div className="ProductPage__details">
        <table>
          <thead>
            <tr>
              <th colSpan={4}>Technical characteristics:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="detail">Design</td>
              <td>Lorem Ipsum aset crum</td>
              <td className="detail">Rear Camera</td>
              <td>Lorem Ipsum aset crum</td>
            </tr>
            <tr>
              <td className="detail">Display</td>
              <td>Lorem Ipsum aset crum</td>
              <td className="detail">Battery</td>
              <td>Lorem Ipsum aset crum</td>
            </tr>
            <tr>
              <td className="detail">Processor</td>
              <td>Lorem Ipsum aset crum</td>
              <td className="detail">Operating System</td>
              <td>Lorem Ipsum aset crum</td>
            </tr>
            <tr>
              <td className="detail">Memory</td>
              <td>Lorem Ipsum aset crum</td>
              <td className="detail">Connectivity</td>
              <td>Lorem Ipsum aset crum</td>
            </tr>
            <tr>
              <td className="detail">Storage</td>
              <td>Lorem Ipsum aset crum</td>
              <td className="detail">Design</td>
              <td>Lorem Ipsum aset crum</td>
            </tr>
            <tr>
              <td className="detail">Camera</td>
              <td>Lorem Ipsum aset crum</td>
              <td className="detail">Other Specifics</td>
              <td>Lorem Ipsum aset crum</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

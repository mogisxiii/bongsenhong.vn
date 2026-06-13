import './App.css';

const wonderImages = [
  {
    src: '/images/media/facility-1.jpg',
    label: 'Lớp học',
    title: 'Không gian sạch, sáng, gần gũi',
  },
  {
    src: '/images/curriculum/activity-6.jpg',
    label: 'Hoạt động',
    title: 'Bé học qua chơi và trải nghiệm',
  },
  {
    src: '/images/media/facility-3.jpg',
    label: 'Ngoài trời',
    title: 'Vận động mỗi ngày trong môi trường vui tươi',
  },
];
const trustCards = [
  {
    icon: '🛡️',
    title: 'An toàn',
    text: 'Cô theo sát bé.',
  },
  {
    icon: '🍲',
    title: 'Dinh dưỡng',
    text: 'Thực đơn theo tuổi.',
  },
  {
    icon: '🌱',
    title: 'Phát triển',
    text: 'Học qua trải nghiệm.',
  },
  {
    icon: '📍',
    title: 'Thuận tiện',
    text: 'Ngay Bình Chánh.',
  },
];

const curriculumImages = [
  '/images/curriculum/activity-2.jpg',
  '/images/curriculum/activity-1.jpg',
  '/images/curriculum/activity-5.jpg',
  '/images/curriculum/activity-4.jpg',
  '/images/curriculum/activity-6.jpg',
];

const mealImages = [
  '/images/meals/meal-4.jpg',
  '/images/meals/meal-5.jpg',
  '/images/meals/thucdonmau1.jpg',
  '/images/meals/thucdonmau7.jpg',
];

const journey = [
  {
    time: 'Buổi sáng',
    title: 'Bé vào lớp nhẹ nhàng',
    text: 'Cô đón bé bằng sự gần gũi để bé yên tâm bắt đầu ngày mới.',
    image: '/images/media/location-1.jpg',
  },
  {
    time: 'Khám phá',
    title: 'Bé học qua trò chơi',
    text: 'Hoạt động giúp bé tự tin, vận động và giao tiếp tốt hơn.',
    image: '/images/curriculum/activity-3.jpg',
  },
  {
    time: 'Bữa ăn',
    title: 'Ăn ngon, ngủ đủ',
    text: 'Bữa ăn phù hợp độ tuổi, giúp phụ huynh yên tâm hơn.',
    image: '/images/meals/meal-4.jpg',
  },
];

const parentReasons = [
  'Muốn tìm trường gần Bình Chánh.',
  'Bé chuẩn bị đi học lần đầu.',
  'Muốn xem lớp, bữa ăn và cách cô chăm bé.',
  'Cần tư vấn học phí theo tuổi bé.',
];

export default function App() {
  return (
    <main className="site">
      <header className="nav">
        <a href="#top" className="brand">
  <img
    src="/images/media/logobongsenhong.jpg"
    alt="Logo Bông Sen Hồng"
    className="brandLogo"
  />
  <span>Bông Sen Hồng</span>
</a>

        <nav>
          <a href="#khong-gian">Không gian</a>
          <a href="#chuong-trinh">Hoạt động</a>
          <a href="#hoc-phi">Học phí</a>
        </nav>

        <a href="#dang-ky" className="navCta">Tham quan</a>
      </header>

      <section id="top" className="hero">
        <div className="heroGlow" />

        <div className="heroInner">
          <div className="mobileHero">
            <div className="mobileHeroImage">
              <img src="/images/media/hocve5.jpg" alt="Bé học vẽ tại Bông Sen Hồng" />
            </div>

            <div className="mobileHeroText">
              <p className="eyebrow pinkText">Mầm non Bông Sen Hồng</p>
              <h1>
                Bé vui đến lớp
                <span>ba mẹ an tâm mỗi ngày</span>
              </h1>
              <p>
                Môi trường ấm áp, an toàn cho bé từ 12 tháng đến 5 tuổi tại Tân Quý Tây, Bình Chánh.
              </p>

              <a href="#dang-ky" className="btn primary">Đặt lịch tham quan</a>

              <div className="mobileHeroBadges">
                <span>✓ Nhận trẻ từ 12 tháng</span>
                <span>✓ Cô giáo theo sát bé</span>
                <span>✓ Thực đơn cập nhật hàng tuần</span>
              </div>
            </div>
          </div>

          <div className="heroText">
            <p className="eyebrow">Mầm non Bông Sen Hồng</p>

            <h1>
              Bé vui đến lớp
              <span>ba mẹ an tâm mỗi ngày</span>
            </h1>

            <p className="heroLead">
              Nhận trẻ từ 12 tháng đến 5 tuổi. Môi trường an toàn, yêu thương tại Tân Quý Tây, Bình Chánh.
            </p>

            <div className="heroBadges premiumBadges">
  <span>🛡️ Cơ sở vật chất hiện đại</span>
  <span>💛 Giáo viên nhiệt huyết</span>
  <span>🌿 Dinh dưỡng khoa học</span>
  <span>🔒 An toàn tuyệt đối</span>
</div>

<div className="heroInfoBar">
  <div>
    <b>📍 Địa chỉ</b>
    <span>Tân Quý Tây, Bình Chánh, TP. Hồ Chí Minh</span>
  </div>

  <div>
    <b>☎ Hotline</b>
    <span>028 3760 8573</span>
  </div>

  <div>
    <b>🕒 Giờ hoạt động</b>
    <span>Thứ 2 - Thứ 7: 6:30 - 17:30</span>
  </div>
</div>

            <div className="heroActions">
              <a href="#dang-ky" className="btn primary">Đặt lịch tham quan</a>
              <a href="tel:02837608573" className="btn ghost">Gọi tư vấn</a>
            </div>
          </div>
        </div>
      </section>

      <section id="khong-gian" className="wonderSection">
        <div className="sectionHead light">
          <p className="eyebrow">Không gian thực tế</p>
          <h2>Con học, chơi và lớn lên trong môi trường gần gũi.</h2>
        </div>

        <div className="wonderGrid">
          {wonderImages.map((item) => (
            <article className="wonderCard" key={item.src}>
              <img src={item.src} alt={item.title} />
              <div>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="chuong-trinh" className="section gallerySection">
        <div className="sectionHead">
          <p className="eyebrow pinkText">Học mà chơi, chơi mà học</p>
          <h2>Bé học qua chơi và trải nghiệm</h2>
        </div>

        <div className="mosaicGrid">
          {curriculumImages.map((src, index) => (
            <img
              key={src}
              className={index === 0 ? 'big' : ''}
              src={src}
              alt="Hoạt động học tập Bông Sen Hồng"
            />
          ))}
        </div>
      </section>

      <section className="section trustSection">
        <div className="sectionHead">
          <p className="eyebrow pinkText">Niềm tin của phụ huynh</p>
          <h2>Vì sao phụ huynh chọn Bông Sen Hồng?</h2>
        </div>

        <div className="trustGrid">
          {trustCards.map((item) => (
            <article className="trustCard" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section journeySection">
        <div className="sectionHead">
          <p className="eyebrow pinkText">Một ngày tại trường</p>
          <h2>Hành trình nhỏ, cảm xúc lớn</h2>
        </div>

        <div className="journeyList">
          {journey.map((item, index) => (
            <article className="journeyCard" key={item.title}>
              <div className="journeyImage">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="journeyText">
                <span>0{index + 1} · {item.time}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mealSection">
        <div className="mealContent">
          <p className="eyebrow">Bữa ăn của bé</p>
          <h2>Bữa ăn sạch, ngon, phù hợp với bé.</h2>
          <p>
            Thực đơn được chuẩn bị phù hợp với độ tuổi, giúp phụ huynh yên tâm hơn mỗi ngày.
          </p>
          <a href="#dang-ky" className="btn primary">Nhận tư vấn thực đơn</a>
        </div>

        <div className="mealGallery">
          {mealImages.map((src) => (
            <img key={src} src={src} alt="Bữa ăn tại Bông Sen Hồng" />
          ))}
        </div>
      </section>

      <section className="section facilityShowcase">
        <div className="sectionHead">
          <p className="eyebrow pinkText">Nhìn tận mắt trước khi quyết định</p>
          <h2>Phụ huynh nên đến tham quan nếu...</h2>
        </div>

        <div className="reasonLayout">
          <div className="reasonPhoto">
            <img src="/images/media/location-2.jpg" alt="Tham quan Bông Sen Hồng" />
          </div>

          <div className="reasonGrid">
            {parentReasons.map((reason) => (
              <div className="reasonCard" key={reason}>{reason}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="hoc-phi" className="feeBand">
        <div>
          <p className="eyebrow">Tư vấn tuyển sinh</p>
          <h2>Nhận học phí theo độ tuổi của bé</h2>
          <p>
            Để lại số điện thoại, nhà trường sẽ tư vấn chương trình phù hợp và hẹn lịch tham quan.
          </p>
          <a href="#dang-ky" className="btn primary">Nhận bảng học phí</a>
        </div>
      </section>

      <section className="locationSection">
        <div className="locationCard">
          <div>
            <p className="eyebrow pinkText">Địa chỉ trường</p>
            <h2>Gần gũi, dễ tìm, thuận tiện đưa đón</h2>
            <p>
              7/15 Đoàn Nguyễn Tuấn, Ấp 1, Xã Tân Quý Tây, Bình Chánh, TP.HCM
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=10.6561032,106.6125894"
              target="_blank"
              rel="noreferrer"
              className="btn darkBtn"
            >
              Chỉ đường Google Maps
            </a>
          </div>

          <img src="/images/media/location-1.jpg" alt="Vị trí Bông Sen Hồng" />
        </div>
      </section>

      <section id="dang-ky" className="finalCta">
        <div className="finalText">
          <p className="eyebrow">Đăng ký tham quan miễn phí</p>
          <h2>Đặt lịch tham quan trường</h2>
          <p>Nhà trường sẽ liên hệ để xác nhận lịch phù hợp.</p>
        </div>

        <form className="leadForm">
          <input type="text" placeholder="Tên phụ huynh" />
          <input type="tel" placeholder="Số điện thoại" />
          <select defaultValue="">
            <option value="" disabled>Tuổi / năm sinh của bé</option>
            <option>12 - 18 tháng</option>
            <option>18 - 24 tháng</option>
            <option>2 - 3 tuổi</option>
            <option>3 - 4 tuổi</option>
            <option>4 - 5 tuổi</option>
          </select>
          <button type="button">Đặt lịch tham quan</button>
          <span>Thông tin chỉ dùng để tư vấn tuyển sinh.</span>
        </form>
      </section>

      <footer className="footer">
        <div className="footerGrid">
          <div className="footerBrand">
            <h3>Mầm non Bông Sen Hồng</h3>
            <p>
              Môi trường mầm non yêu thương, an toàn và giàu trải nghiệm dành cho trẻ từ 12 tháng đến 5 tuổi.
            </p>
          </div>

          <div className="footerCol">
            <h4>Thông tin liên hệ</h4>
            <p>☎ 028 3760 8573</p>
            <p>✉ mnbongsenhong@gmail.com</p>
            <p>📍 7/15 Đoàn Nguyễn Tuấn, Tân Quý Tây, Bình Chánh, TP.HCM</p>
          </div>

          <div className="footerCol">
            <h4>Tuyển sinh</h4>
            <p>Nhận trẻ từ 12 tháng đến 5 tuổi</p>
            <p>Đăng ký tham quan trường miễn phí</p>
            <a href="#dang-ky">Đặt lịch tham quan</a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 Mầm non Bông Sen Hồng</span>
          <span>Yêu thương · An toàn · Trải nghiệm · Phát triển</span>
        </div>
      </footer>

      <div className="sticky">
        <a href="#dang-ky">📅 Đặt lịch</a>
        <a href="tel:02837608573">📞 Gọi ngay</a>
      </div>
    </main>
  );
}
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pricing & Plans</title>
        {/* Add link tags for your CSS files here */}
      </Head>

      <header className="top-navigation">
        {/* Add your navigation bar here */}
      </header>

      <main className="container">
        {/* Pricing Section */}
        <section className="pricing-section">
          <h1>Pricing & Plans</h1>
          {/* Include a description if needed */}
          <div className="pricing-cards">
            {/* Repeat this structure for each pricing plan */}
            <div className="card">
              <h2>Starter</h2>
              {/* List features and include a CTA button */}
            </div>
            {/* ... other cards */}
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Check our features</h2>
          <div className="feature-cards">
            {/* Repeat this structure for each feature */}
            <div className="feature">
              <Image
                src="/path-to-your-icon.svg"
                alt="Feature Icon"
                width={24}
                height={24}
                priority
              />
              <h3>Feature Title</h3>
              <p>Feature description...</p>
            </div>
            {/* ... other features */}
          </div>
        </section>
      </main>

      <footer className="footer">
        {/* Add your footer here */}
      </footer>
    </>
  );
}

import { Breadcrumb, Preview } from "@idealjs/camphora-react";
import {
  breadcrumbCurrent,
  breadcrumbItem,
  breadcrumbLink,
  breadcrumbSeparator,
} from "@idealjs/camphora-styled";

const page = () => {
  return (
    <div style={{ overflowY: "auto", padding: 24 }}>
      <h3>Breadcrumb</h3>
      <Preview>
        <Breadcrumb>
          <li className={breadcrumbItem}>
            <a href="/" className={breadcrumbLink}>Home</a>
            <span className={breadcrumbSeparator}>/</span>
          </li>
          <li className={breadcrumbItem}>
            <a href="/docs" className={breadcrumbLink}>Docs</a>
            <span className={breadcrumbSeparator}>/</span>
          </li>
          <li className={breadcrumbItem}>
            <span className={breadcrumbCurrent}>Components</span>
          </li>
        </Breadcrumb>
      </Preview>
    </div>
  );
};

export default page;

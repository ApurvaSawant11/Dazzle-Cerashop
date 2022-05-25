import React from "react";
import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  TelegramIcon,
  EmailIcon,
} from "react-share";
import { toast } from "react-toastify";
import { CopyIcon } from "../../assets";

const ShareProductModal = ({ url, setShowModal }) => {
  const title =
    "Shop amazing products at up to 70% OFF. Check out this product that I liked!";
  const hashtags = ["ecommerce", "neogcamp", "ceramic"];

  const { productId } = useParams();

  const copyLink = () => {
    navigator.clipboard.writeText(
      `https://dazzle-cerashop.vercel.app/product/${productId}`
    );
    toast.success("Link copied to Clipboard", {
      icon: <CopyIcon size="2rem" />,
    });
  };

  return (
    <div className="share-container basic-modal show flex-row-center">
      <div className="modal p-1">
        <div className="modal-header flex-row-center">
          <span>SHARE THIS PRODUCT</span>
          <span onClick={() => setShowModal(false)}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="icons-container flex-row-center wrap  pt-1">
          <span className="copy-icon">
            <CopyIcon onClick={copyLink} size={26} />
          </span>
          <FacebookShareButton url={url} quote={title} hashtag={hashtags}>
            <FacebookIcon size={48} round onClick={() => setShowModal(false)} />
          </FacebookShareButton>

          <WhatsappShareButton url={url} title={title} hashtag={hashtags}>
            <WhatsappIcon size={48} round onClick={() => setShowModal(false)} />
          </WhatsappShareButton>

          <TwitterShareButton
            url={url}
            title={title}
            via={"apurvasawant11"}
            hashtags={hashtags}
          >
            <TwitterIcon size={48} round onClick={() => setShowModal(false)} />
          </TwitterShareButton>

          <EmailShareButton
            url={url}
            subject={"Save Everytime you shop"}
            body={title}
          >
            <EmailIcon size={48} round onClick={() => setShowModal(false)} />
          </EmailShareButton>

          <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={48} round onClick={() => setShowModal(false)} />
          </TelegramShareButton>

          <LinkedinShareButton
            url={url}
            title={title}
            summary={
              "An E-commerce website created using ReactJS and my Component Library- DAZZLE UI"
            }
            source={"Dazzle Cerashop"}
          >
            <LinkedinIcon size={48} round onClick={() => setShowModal(false)} />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export { ShareProductModal };

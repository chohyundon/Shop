import React, { useState } from "react";
import { uploadImage } from "../api/uploader";
import { writeUserData } from "../api/firebase";
import { styled } from "styled-components";

const Box = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default function NewProducts() {
  const [product, setProduct] = useState({});
  const [file, setFiles] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFiles(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        writeUserData(product, url).then(() => {
          setSuccess("성공적으로 제품이 등록되었습니다");
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <Box>
      <h2>새로운 제품 등록</h2>
      {success && <p> ✅{success} </p>}
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="local file"
          style={{ width: "500px", height: "400px" }}
        />
      )}
      <form onSubmit={handleSubmit}>
        <InputBox>
          <input
            type="file"
            accept="image/*"
            name="file"
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="제품명"
            value={product.title ?? ""}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="가격"
            value={product.price ?? ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="카테고리"
            value={product.category ?? ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="productDetail"
            placeholder="제품 설명"
            value={product.productDetail ?? ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="option"
            value={product.option ?? ""}
            placeholder="옵션(,)로 구분"
            onChange={handleChange}
          />
        </InputBox>
        <button disabled={isUploading} style={{ width: "1200px" }}>
          {isUploading ? "업로드 중..." : "제출하기"}
        </button>
      </form>
    </Box>
  );
}

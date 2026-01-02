CREATE DATABASE board_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE board_db;

-- 1. users 테이블 생성 (이미 존재하면 생략 가능)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE, -- 사용자 이름 (중복 방지)
    password VARCHAR(255) NOT NULL, -- 비밀번호 (보안을 위해 길게 설정)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. posts 테이블 생성
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_id int not null,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
import { createClient } from '@supabase/supabase-js';
import {
  EXPO_PUBLIC_SUPABASE_URL,
  EXPO_PUBLIC_SUPABASE_ANON_KEY,
  EXPO_PUBLIC_ADMIN_PASSWORD,
} from '@env';

/**
 * Supabase 클라이언트 설정
 * 환경 변수에서 URL과 Key를 가져옴
 */
export const supabase = createClient(
  EXPO_PUBLIC_SUPABASE_URL,
  EXPO_PUBLIC_SUPABASE_ANON_KEY
);

/**
 * 관리자 비밀번호
 * 쿠폰 사용 등 관리자 권한 필요 시 사용
 */
export const AdminPassword = EXPO_PUBLIC_ADMIN_PASSWORD;
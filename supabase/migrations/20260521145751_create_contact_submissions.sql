/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - unique identifier for each submission
      - `name` (text, not null) - name of the person submitting
      - `email` (text, not null) - email address of the submitter
      - `organization` (text) - optional organization/company name
      - `message` (text, not null) - the message content
      - `created_at` (timestamptz) - when the submission was created

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert submissions (public contact form)
    - No select/update/delete policies for anonymous users (admin-only access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    length(name) > 0 AND
    length(email) > 0 AND
    length(message) > 0
  );
